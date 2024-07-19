import { graphql } from 'gatsby';
import React from 'react';
import { AllMarkdownRemark, SiteMetadata } from '../type';
import Layout from '../layout';
import Seo from '../components/Seo';
// import SubBanner from '../components/SubBanner';
import CategoryButton from '../components/CatgoryButton';
import HelpsClass from '../models/helps';

type HelpsProps = {
    data: {
        site: { siteMetadata: SiteMetadata };
        allMarkdownRemark: AllMarkdownRemark;
        cur:any;
        next: any;
        prev: any;
    };
    location: Location;
    
}

const Helps: React.FC<HelpsProps> = ({ location, data }) => {
    const helps = data.allMarkdownRemark?.edges?.map(({ node }) => new HelpsClass(node));
   
    return (
        <>
            <Layout location={location}>
                <Seo title='자주 묻는 질문' />
                <CategoryButton helps={helps} />
            </Layout>
        </>
    )
}
export default Helps; 



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

console.log("pageQuery", pageQuery);