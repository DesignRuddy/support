import { graphql } from 'gatsby';

import BuyMeACoffee from '@/src/components/BuyMeACoffee';
import PostHeader from '@/src/components/PostHeader';
import PostNavigator from '@/src/components/PostNavigator';
import Seo from '@/src/components/Seo';
import Utterances from '@/src/components/Utterances';
import Layout from '@/src/layout';
import { Help, SiteMetadata } from '@/src/type';

import * as S from './styled';
import HelpsClass from '@/src/models/helps';

type PostTemplateProps = {
  location: Location;
  data: { prev: Help; next: Help; cur: Help; site: { siteMetadata: SiteMetadata }; markdownRemark: Help };
};

const PostTemplate: React.FC<PostTemplateProps> = ({ location, data }) => {
  const curPost = new HelpsClass(data.cur);
  const prevPost = data.prev && new HelpsClass(data.prev);
  const nextPost = data.next && new HelpsClass(data.next);
  const utterancesRepo = data.site.siteMetadata.comments.utterances.repo;

  return (
    <Layout location={location}>
      <Seo title={`소속 고객센터 | ${curPost?.title}`} description={curPost?.excerpt} />
      <PostHeader help={curPost} />

      <S.PostContent>
        <div className='markdown' dangerouslySetInnerHTML={{ __html: curPost.html }} />
      </S.PostContent>
    
      {/*
      <S.BuyMeACoffeeWrapper>
        <div>👇 도움이 되셨다면 👇</div>
        <BuyMeACoffee />
      </S.BuyMeACoffeeWrapper>
      */}
      
      <PostNavigator prevPost={prevPost} nextPost={nextPost} />
      <Utterances repo={utterancesRepo} path={curPost.slug} />
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query ($slug: String, $nextSlug: String, $prevSlug: String) {
    cur: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 500, truncate: true)
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
        categories
      }
      fields {
        slug
      }
    }

    next: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
        categories
      }
      fields {
        slug
      }
    }

    prev: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
        categories
      }
      fields {
        slug
      }
    }

    site {
      siteMetadata {
        siteUrl
        comments {
          utterances {
            repo
          }
        }
      }
    }
  }
`;
