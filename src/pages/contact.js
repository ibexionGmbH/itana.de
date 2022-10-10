import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />

      <Helmet>
        <meta http-equiv="refresh" content="0; url=/kontakt/" />
      </Helmet>
    </Layout>
  );
}
