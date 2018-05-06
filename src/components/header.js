import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <nav>
    <Link className="home" to="/">HOME</Link>
    <Link to="whatwhenwhere" className="whatwhenwhere">WHAT, WHEN &amp; WHERE</Link>
    <Link to="faqs" className="faqs">FAQ'S</Link>
    <Link to="links" className="links">USEFUL LINKS</Link>
  </nav>
)

export default Header
