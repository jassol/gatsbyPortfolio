import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import QuickAbout from "../components/quickAbout"
import SEO from "../components/seo"
import Button from "../components/button"
import Skills from "../components/skills"
import GenericPageTitle from "../components/genericPageTitle"

// const links = [
//   {link:'/projects/',text:'see projects'},
//   {link:'/contact/',text:'contact me'}
// ];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <QuickAbout />
    {/* <Contact /> */}
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    <GenericPageTitle pageTitle="What I Can Do" />
    <Skills />
    <Button link={'/projects'} text={'see projects'} />
    <Button link={'/contact'} text={'contact me'} />

  </Layout>
)

export default IndexPage
