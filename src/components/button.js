import React from 'react';
// import { useStaticQuery, graphql } from "gatsby"

const colors = ['#cdc7e5', '#a6cfd5', '#d7af70', '#9cb380', '#e58f65', '#cf8ba9']

const Button = (props) => {
  const {link, text} = props;

  const mouseOver = e => {
    e.preventDefault()
    const chosenColor = colors[Math.floor(Math.random()*colors.length)];
    e.target.style.backgroundColor = chosenColor;
    // e.target.style.fontStyle = 'italic';
  }
  const mouseLeave = e => {
    e.preventDefault()
    e.target.style.backgroundColor = '#C0C0C0';
    // e.target.style.fontStyle = 'normal';

  }
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
    id='customButton'
    onMouseOver={mouseOver}
    onFocus={mouseOver}
    onMouseLeave={mouseLeave}
    onBlur={mouseLeave}
  >
    {text} ⇒
    </a>
  )
}

export default Button;
