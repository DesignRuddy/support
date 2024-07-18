import type { Actions, GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import path from 'path';

import { AllMarkdownRemark } from './src/type';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
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

//포스트s 내용? 전체보기? 모아 보기?
const createPosts = ({ createPage, edges }: CreatePagesFuncProps) => {
  const posts = path.resolve(`./src/templates/posts-template/index.tsx`);
  const categorySet: Set<string> = new Set();

  const edgesWithMap = edges.map((edge) => {
    const { categories } = edge.node.frontmatter;
    const categoriesArr = categories.split(' ');
    const categoriesMap = categoriesArr.reduce((acc, category) => {
      acc[category] = true;
      return acc;
    }, {} as Record<string, boolean>);

    return { ...edge, categoriesMap };
  });

  edgesWithMap.forEach((edge) => {
    const postCategories = Object.keys(edge.categoriesMap);
    postCategories.forEach((category) => {
      const categoryName = category.replace('featured-', '').trim();
      categorySet.add(categoryName);
    });
  });

  const categories = ['전체', ...[...categorySet].sort((a, b) => a.localeCompare(b))];

  createPage({
    path: `/posts`,
    component: posts,
    context: { currentCategory: '전체', edges, categories },
  });

  categories.forEach((currentCategory) => {
    createPage({
      path: `/posts/${currentCategory}`,
      component: posts,
      context: {
        currentCategory,
        categories,
        edges: edgesWithMap.filter((edge) => edge.categoriesMap[currentCategory]),
      },
    });
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

/**
 * faq Page
 */
const createFaQ = ({ createPage, edges }: CreatePagesFuncProps) => {
  const faq = path.resolve(`./src/templates/faq-template/index.tsx`);
  const categorySet: Set<string> = new Set();

  const edgesWithMap = edges.map((edge) => {
    const { categories } = edge.node.frontmatter;
    const categoriesArr = categories.split(' ');
    const categoriesMap = categoriesArr.reduce((acc, category) => {
      acc[category] = true;
      return acc;
    }, {} as Record<string, boolean>);

    return { ...edge, categoriesMap };
  });

  edgesWithMap.forEach((edge) => {
    const postCategories = Object.keys(edge.categoriesMap);
    postCategories.forEach((category) => {
      const categoryName = category.replace('featured-', '').trim();
      categorySet.add(categoryName);
    });
  });

  const categories = ['전체', ...[...categorySet].sort((a, b) => a.localeCompare(b))];

  createPage({
    path: `/faq`,
    component: faq,
    context: { currentCategory: '전체', edges, categories },
  });

  categories.forEach((currentCategory) => {
    createPage({
      path: `/faq/${currentCategory}`,
      component: faq,
      context: {
        currentCategory,
        categories,
        edges: edgesWithMap.filter((edge) => edge.categoriesMap[currentCategory]),
      },
    });
  });
};


/**
 * faq/search *(!layout && search Page)
 */
// const createSearch = ({ createPage, edges }: CreatePagesFuncProps) => {
//   const post = path.resolve(`./src/templates/faq-template/index.tsx`);

//   edges.forEach(({ node, next, previous }) => {
//     createPage({
//       path: node.fields.slug,
//       component: post,
//       context: {
//         // additional data can be passed via context
//         slug: node.fields.slug,
//         nextSlug: next?.fields.slug ?? '',
//         prevSlug: previous?.fields.slug ?? '',
//       },
//     });
//   });
// };


// 페이지에 대한 정의?같은거인듯
export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Get all markdown blog posts sorted by date
  const result: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errors?: any;
    data?: {
      allMarkdownRemark: AllMarkdownRemark;
    };
  } = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            id
            excerpt(pruneLength: 500, truncate: true)
            fields {
              slug
            }
            frontmatter {
              categories
              title
              date(formatString: "YYYY.MM.DD")
            }
          }
          next {
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
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

  const filteredEdges = result.data.allMarkdownRemark.edges.map((edge) => {
    const { categories } = edge.node.frontmatter;
    const categoriesArr = categories.split(' ');

    const categorySet: Set<string> = new Set();

    categoriesArr.forEach((category) => {
      const categoryName = category.replace('featured-', '').trim();
      categorySet.add(categoryName);
    });

    return {
      ...edge,
      node: {
        ...edge.node,
        frontmatter: {
          ...edge.node.frontmatter,
          categories: [...categorySet].sort((a, b) => a.localeCompare(b)).join(' '),
        },
      },
    };
  });

  createPosts({ createPage, edges: filteredEdges });
  createPost({ createPage, edges: filteredEdges });
  createFaQ({ createPage, edges: filteredEdges });
  // createSearch({ createPage, edges: filteredEdges });
};

/**
 * Node를 생성하는 구문임
 * @param param0 
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
 * @param param0 
 */
export const onCreatePage: GatsbyNode['onCreatePage'] = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.match(/^\/admin/)) {
    deletePage(page);
    createPage({
      ...page,
      matchPath: "/admin/*"
    })
  }
}