import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function GutachtenPage() {
  return (
    <Layout>
      <SEO title="Gutachten" />

      <Helmet>
        <meta
          http-equiv="refresh"
          content="0; url=https://expertise.itana.de/"
        />
      </Helmet>
    </Layout>
  );
}
