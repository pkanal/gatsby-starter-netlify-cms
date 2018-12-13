import React from "react";
import Layout from "../components/Layout";

export const HomePageTemplate = props => <div>Home!</div>;

const HomePage = ({ data }) => (
  <Layout>
    <HomePageTemplate />
  </Layout>
);

export default HomePage;
