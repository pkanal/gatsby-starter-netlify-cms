import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { Section } from "../components/Section";
import { Header } from "../components/Header";
import { Sections } from "../components/Sections";

export const HomePageTemplate = ({
  title,
  headerImage,
  sponsors,
  sections
}) => (
  <>
    <Header heading={title} backgroundImage={headerImage} />
    <Section title="Our Sponsors">
      {sponsors.map(sponsor => (
        <a>{sponsor.url}</a>
      ))}
    </Section>
    <Sections sections={sections} />
  </>
);

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log(post);

  const sponsors = post.frontmatter.sponsors.map(({ logo, ...sponsor }) => ({
    ...sponsor,
    logo: logo.childImageSharp ? logo.childImageSharp.fluid.src : ""
  }));

  console.log(sponsors);

  return (
    <Layout>
      <HomePageTemplate
        title={post.frontmatter.title}
        headerImage={post.frontmatter.header_image.childImageSharp.fluid.src}
        sponsors={sponsors}
        sections={post.frontmatter.sections}
      />
    </Layout>
  );
};

export default HomePage;

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        header_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sponsors {
          type
          url
          logo {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        sections {
          title
          body
        }
      }
    }
  }
`;
