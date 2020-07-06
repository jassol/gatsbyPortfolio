import React from "react";
import * as data from "./myData";
import Button from "./button";

const SocialCards = (socialData) => {
  return (
    <div style={{
      margin: '0 auto 8rem',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'stretch',
      maxWidth: 1060
    }}>
      {data.socialData.map((site,i) => <SocialCard key={i} site={site} />)}
    </div>
  )
};

/*
  socialData.site = {type: 'github', link: 'https://github.com/jassol'}
*/

const SocialCard = (socialData) => {
  const {type, text, link} = socialData.site;
  return (
    <div
    style={{
      flex: '1 0 40%',
      margin: `0.5rem 0.5rem`,
      maxWidth: 530,
      alignSelf: `center`,
      padding: `0.5rem`,
      backgroundColor: `#F0F0F0`,
      borderRadius: 5
    }}
    >
      <div
        style={{
          margin: `2rem auto`,
          maxWidth: '425px',
          padding: `0 1.0875rem`
        }}
        >
        <h2 style={{width:200}}>{type}</h2>
        <Button link={link} text={text} />
      </div>
    </div>
  )
}

export default SocialCards;
