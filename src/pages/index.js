import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import QuickAbout from "../components/quickAbout"
import SEO from "../components/seo"
// import Button from "../components/button"
import Skills from "../components/skills"
import GenericPageTitle from "../components/genericPageTitle"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <QuickAbout />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    <GenericPageTitle pageTitle="Technical Skills" />
    <Skills />
  </Layout>
)

export default IndexPage
