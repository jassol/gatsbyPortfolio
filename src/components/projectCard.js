import React from "react"
// import Image from "./image"
import Button from "./button";
import Img from "gatsby-image";


/*
projData = {
  name: 'PPSC Portal',
  description: 'Member Portal for Solar Group',
  stack: ['Javascript', 'React/Redux', 'Express', 'Airtable', 'Mocha/Chai/Sinon'],
  links: {
    github: 'https://github.com/people-power-solar',
    deployed: 'https://peoplepower.netlify.app/'
  },
  shortContent: "Coming Soon."
}
*/

const ProjectCard = (props) => {
  const {date,stack, shortContent, description, links} = props.proj;
  console.log('props.fluid.node.childImageSharp: ',props.fluid.node.childImageSharp)
  // const {sizes} = props.photo;
  const {fluid} = props.fluid.node.childImageSharp;
  return (
    <div
    style={{
      margin: `1rem auto`,
      maxWidth: 1060,
      padding: `0.5rem`,
      backgroundColor: `#F0F0F0`,
      borderRadius: 5
    }}
    >
      <div
        style={{
          margin: `2rem auto`,
          maxWidth: 960,
          padding: `0 1.0875rem`,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}
        >
          <div style={{maxWidth: 600}}>
            <h2>{description}</h2>
            <p>{stack.join(' • ')}</p>
            <p><i>{date} - </i> {shortContent}</p>
            {Object.keys(links).map((key, i) => {
              return <Button link={links[key]} text={key} key={i} />
            })}
          </div>
          <div style={{
            width: '250px',
            alignSelf: 'center',
            margin: '1.7rem 0'
          }}>
              <Img
                title="Project Image"
                alt="Project Image"
                fluid={fluid}
              />
          </div>
      </div>
    </div>
  )
}

export default ProjectCard;
