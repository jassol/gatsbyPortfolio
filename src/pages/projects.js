import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GenericPageTitle from "../components/genericPageTitle"
import ProjectCard from "../components/projectCard"
import {projectData} from "../components/myData"

const SecondPage = (props) => {
  console.log('props:', props)
  return (
    <Layout>
      <SEO title="Projects" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 80 1440 220"><path fill="#F0F0F0" fillOpacity="1" d="M0,288L48,288C96,288,192,288,288,261.3C384,235,480,181,576,176C672,171,768,213,864,208C960,203,1056,149,1152,128C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <GenericPageTitle pageTitle="Projects"/>
      <div style={{
        margin: '0 0 8rem 0',
        padding: '0.5rem'
      }}>
        {projectData.map((proj,i) => <ProjectCard key={i} proj={proj} fluid={props.data.file.childImageSharp.fluid} />)}
      </div>
    </Layout>
  )
}

export default SecondPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "sokoCity.png" }) {
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
