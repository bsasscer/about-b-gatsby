import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'gray',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <Link to="/">Blog</Link>
          <Link to="/about/">About</Link>
          <Link to="/contact/">Contact</Link>
        </ul>
      </h1>
    </div>
  </div>
)

export default Header
