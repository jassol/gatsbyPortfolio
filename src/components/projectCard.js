import React from "react"
import Image from "./image"
import Button from "./button"

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

const ProjectCard = (projData) => {
  const {stack, shortContent, description, links} = projData.proj;
  console.log(links.keys)
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
            <p>{shortContent}</p>
            {/* <div> */}
              {Object.keys(links).map((key, i) => {
                return <Button link={links[key]} text={key} key={i} />
              })}
            {/* </div> */}
          </div>
          <div style={{
            width: '120px',
            alignSelf: 'center',
            margin: '1.7rem 0'
          }}>
              <Image />
          </div>
      </div>
    </div>
  )
}

export default ProjectCard;
