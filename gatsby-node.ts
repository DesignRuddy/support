import type { Actions, GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import path from 'path';

import { AllMarkdownRemark } from './src/type';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    // cache: {
    //   type: 'filesystem',
    //   buildDependencies: {
    //     config : [__filename],
    //   }
    // },
    cache:false,
    resolve: {
      alias: {
        '@/src': path.resolve(__dirname, 'src/'),
        '@/assets': path.resolve(__dirname, 'assets/'),
      },
    },
  });
};

type CreatePagesFuncProps = {
  createPage: Actions['createPage'];
  edges: AllMarkdownRemark['edges'];
};

/**
 * 각 페이지 템플릿별로 페이지 생성
 */
const createPagesFromEdges = ({ createPage, edges, template }: CreatePagesFuncProps & { template: string }) => {
  createPage({
    path: `/helps`,
    component: template,
    context: {
      edges,
    },
  });
};


/**
 * post Page
 */
const createPost = ({ createPage, edges }: CreatePagesFuncProps) => {
  const post = path.resolve(`./src/templates/post-template/index.tsx`);

  edges.forEach(({ node, next, previous }) => {
    createPage({
      path: node.fields.slug,
      component: post,
      context: {
        // additional data can be passed via context
        slug: node.fields.slug,
        nextSlug: next?.fields.slug ?? '',
        prevSlug: previous?.fields.slug ?? '',
      },
    });
  });
};


export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Get all markdown posts
  const result: {
    errors?: any;
    data?: {
      allMarkdownRemark: AllMarkdownRemark;
    };
  } = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            excerpt(pruneLength: 500, truncate: true)
            fields {
              slug
            }
            frontmatter {
              id
              services
              categories
              title
              date(formatString: "YYYY.MM.DD")
            }
          }
        }
      }
    }
  `);

  if (result.errors || !result.data) {
    reporter.panicOnBuild(`There was an error loading your blog posts`, result.errors);
    return;
  }

  const edges = result.data.allMarkdownRemark.edges;

  // 각 템플릿 경로
  const templates = {
    main: path.resolve(`./src/templates/helps-template/index.tsx`),
  };

  // 각 디렉토리에 따라 페이지 생성
  // createPagesFromEdges({
  //   createPage,
  //   edges: edges.filter(edge => edge.node.fields.slug.includes('/sosok/')),
  //   template: templates.main,
  //   basePath: 'sosok',
  // });

  // createPagesFromEdges({
  //   createPage,
  //   edges: edges.filter(edge => edge.node.fields.slug.includes('/business/')),
  //   template: templates.main,
  //   basePath: 'business',
  // });

  // createPagesFromEdges({
  //   createPage,
  //   edges: edges.filter(edge => edge.node.fields.slug.includes('/azit/')),
  //   template: templates.main,
  //   basePath: 'azit',
  // });
  createPagesFromEdges({
    createPage,
    edges,
    template: templates.main,
  });
  createPost({ createPage, edges: edges })
};

/**
 * Node를 생성하는 구문
 */
export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` });
    createNodeField({ node, name: `slug`, value: slug });
  }
};

/**
 * 관리자용 페이지 생성
 */
export const onCreatePage: GatsbyNode['onCreatePage'] = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.match(/^\/admin/)) {
    deletePage(page);
    createPage({
      ...page,
      matchPath: "/admin/*"
    });
  }
};