import React from "react"

const Skills = () => (
  <div style={{
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0 1.0875rem 8rem`,
  }}>
    <h2>Frontend</h2>
    <p>Javascript, React, Redux, HTML, CSS, D3.JS (Data Viz), Phaser.io (Gaming)</p>
    <h2>Backend</h2>
    <p>Node.js, Express, Sequelize, Postgres/SQL, Firebase/NoSQL, Airtable</p>
    <h2>Testing</h2>
    <p>TDD/BDD, Jasmine, Mocha, Chai, Sinon</p>
    <h2>Deployment</h2>
    <p>Heroku, Netlify, Firebase, Github Pages</p>
    <h2>Everything Else</h2>
    <p>Git, Github, Travis CI/CD, Jira, Linux, Rubber Ducking <span role='img' aria-label='duck'>🦆</span></p>
  </div>
)

export default Skills;
