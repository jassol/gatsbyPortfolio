import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const navLinks = [
  ['about', '/'],
  ['projects', '/projects'],
  ['say hi', '/contact']
];

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      opacity: 0.8,
      // marginBottom: `1.45rem`,
      position: 'fixed',
      top: 0,
      display: 'flex',
      width: '-webkit-fill-available'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1rem 1.0875rem`,
      }}
    >
      <h4 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `gray`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h4>
    </div>
    {navLinks.map((link,i) => {
      return (
        <div key={i}
          style={{
            margin: `0 auto`,
            padding: `1rem 1.0875rem`,
          }}
        >
          <h4 style={{ margin: 0 }}>
            <Link
              to={link[1]}
              style={{
                color: `gray`,
                textDecoration: `none`,
              }}
            >
              {link[0]}
            </Link>
          </h4>
        </div>
      )
    })}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
