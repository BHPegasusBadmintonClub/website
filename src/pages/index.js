import React from 'react'
import Link from 'gatsby-link'
import welcomeImage from '../layouts/images/homepage/welcome3.jpg';
import mobile from '../layouts/images/mobile.svg';
import FacebookProvider, { Page } from 'react-facebook';

console.log(mobile);
const IndexPage = () => (
  <div>
    <h1 className="heading">Welcome to BH Pegasus Badminton Club!
    </h1>
    <div className="row">
      <div className="col-lg-7 col-md-6 col-xs-12">
        <div className="">

          <img src={welcomeImage} style={{ width: '100%' }} />
          <p>
            <br /> We have mixed and open teams in both the Basingstoke &amp; District Badminton League (
              <a href="bdbl.org.uk">BDBL</a>) and Newbury District Badminton League (
              <a href="http://www.ndba.co.uk/">NDBA</a>).
            </p>
          <hr />
          <a href="http://catholicon.club" className="webapp">
            <img src={mobile} className="icon icon-mobile2" />
            {/* <use xlink: href="#icon-mobile2"></use> */}
            Keep up to date with our team's fixutres and results at
              <br /> http://catholicon.club
            </a>
        </div>
      </div>
      <div className="col-lg-5 col-md-6 col-xs-12">
        <FacebookProvider appId="115823521779935" className="fb-page">
          <Page href="https://www.facebook.com/BHPegasus/" tabs="timeline"
            small-header="true" adapt-container-width="true"
            hide-cover="true" show-facepile="true"
            height="540" />
        </FacebookProvider>

      </div>
    </div>
  </div>
)

export default IndexPage
