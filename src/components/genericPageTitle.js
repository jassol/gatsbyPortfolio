import React from "react"

const GenericPageTitle = ({pageTitle}) => (
  <div
    style={{
      margin: `5rem auto`,
      maxWidth: 960,
      padding: `0 1.0875rem`,
    }}
  >
    <h1>
      {pageTitle}
    </h1>
  </div>
)

export default GenericPageTitle;
