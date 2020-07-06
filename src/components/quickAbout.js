import React from "react"
import Button from "./button"

const QuickAbout = () => (
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F0F0F0" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,192C384,160,480,128,576,128C672,128,768,160,864,186.7C960,213,1056,235,1152,208C1248,181,1344,107,1392,69.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

    <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem`,
        }}
        >
      <h1>Hi, I'm Jasmin.</h1>
      <p>Professionally I am a full stack developer working primarily in Javascript. My background in supply chain management taught me that not all software is good software: I became an engineer to fix that. My goal is to build digital products that are speedy, reliable and intuitive.
      </p>
      <p> Unprofessionally, I love backpacking, board games, and interior design. Also, donuts. Seriously. If you want to know the best place in NYC, let's talk.</p>
      {/* TODO fix this resume link to serve up resume */}
      {/* <a href="./assets/Jasmin.Soltani.pdf" target="_blank" >
        <div>resum&eacute;</div>
      </a> */}
      <Button link={"./assets/Jasmin.Soltani.pdf"} text={'resumé'} />
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 270"><path fill="#F0F0F0" fillOpacity="1" d="M0,224L48,229.3C96,235,192,245,288,229.3C384,213,480,171,576,170.7C672,171,768,213,864,234.7C960,256,1056,256,1152,224C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  </div>
)

export default QuickAbout;
