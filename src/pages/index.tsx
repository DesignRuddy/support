import { graphql } from 'gatsby';
import React from 'react';

import MainBanner from '../components/MainBanner';
import Seo from '../components/Seo';
import Layout from '../layout';
import { AllMarkdownRemark, SiteMetadata } from '../type';
import Footer from '../components/Footer';
import SubBanner from '../components/SubBanner';
import HeroSection from '../components/HeroSection';
import HelpsClass from '../models/helps';
import Products from '../components/Products';


type HomeProps = {
  data: {
    site: { siteMetadata: SiteMetadata };
    allMarkdownRemark: AllMarkdownRemark;
  };
  location: Location;
};

const Home: React.FC<HomeProps> = ({ location, data }) => {
  const helps = data.allMarkdownRemark.edges.map(({ node }) => new HelpsClass(node));

  const { author } = data.site.siteMetadata;

  // allMarkdownRemark.edges의 3개의 게시물을 보여주는?
  // const recentHelps = helps.slice(0, 3);
  // console.log("recentHelps", recentHelps);

  return (
    <>
      {/* <HomePage> */}
      <Seo title='소속 통합고객센터' />
      <Layout location={location}>
        <HeroSection />
      </Layout>

      {/* <Products projects={projects}/> */}

      <Layout>
        <MainBanner author={author} />
      </Layout>

      <SubBanner />

      <Footer />
      {/* </HomePage> */}
    </>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 500, truncate: true)
          frontmatter {
            services
            categories
            title
            date(formatString: "YYYY.MM.DD")
          }
          fields {
            slug
          }
        }
      }
    }

    site {
      siteMetadata {
        siteUrl
        language
        author {
          name
          nickname
          stack
          bio {
            email
            residence
            bachelorDegree
          }
          social {
            github
            linkedIn
            resume
          }
          dropdown {
            velog
            tistory
          }
        }
        featured {
          title
          category
        }
      }
    }
  }
`;
