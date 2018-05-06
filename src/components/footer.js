import React from 'react'
import Link from 'gatsby-link'
import logo from '../layouts/images/structure/facebook_logo.gif';

const Footer = () => (
  <footer className="contact">
    <div className="container">
      <div className="row">
        <div className="col">
          <span>Email us at:</span>
          <a href="mailto:bhpegasus@gmail.com">bhpegasus@gmail.com</a>
        </div>
        <div className="col">
          <span>Follow us on Facebook:</span>
          <a href="http://www.facebook.com/bhpegasus" target="_blank">
            http://www.facebook.com/bhpegasus
              <img src={logo} width="24" height="24" border="0" />
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
