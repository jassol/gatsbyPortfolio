import React from 'react';

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
