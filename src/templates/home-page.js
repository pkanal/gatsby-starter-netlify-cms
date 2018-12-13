import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

export const HomePageTemplate = ({ title }) => <h1>{title}</h1>;

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <HomePageTemplate title={post.frontmatter.title} />
    </Layout>
  );
};

export default HomePage;

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
