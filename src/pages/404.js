import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NotFound from "../components/notFound"
import GenericPageTitle from "../components/genericPageTitle"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <GenericPageTitle pageTitle="I haven't built this page yet!" />
    <NotFound />
  </Layout>
)

export default NotFoundPage
