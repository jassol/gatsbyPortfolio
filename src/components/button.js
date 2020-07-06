import React from 'react';
import { Link } from "gatsby"

const Button = (props) => {
  const {link, text} = props;
  return (
    <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      textDecoration: 'none',
      backgroundColor: '#C0C0C0',
      color: 'black',
      opacity: '0.8',
      padding: '0.5em 1.5em',
      marginRight: '0.5em',
      fontSize: 16
    }}
  >
    {text} ⇒
    </a>
  )
}

export default Button;

{/* <a href="https://soko-city.firebaseapp.com/" target="_blank" >
<button>Play Now</button>
</a> */}
