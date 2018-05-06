import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer';
import FooterAddress from '../components/footerAddress';
import logo from './images/structure/logotype.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const Layout = ({ children, data }) => (
  <div className="container">
    <img src={logo} width="240" height="110" />
    <div id="menu-top"></div>
    <Header />
    <section className="content container">
      {children()}
    </section>
    <Footer />
    <FooterAddress />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
