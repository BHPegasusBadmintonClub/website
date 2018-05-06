import React from 'react';
import shuttle from '../layouts/images/faqs/shuttlebullet.jpg';
import map from '../layouts/images/whatwherewhen/map3.gif';
import divider from '../layouts/images/whatwherewhen/vertdivider.gif';

const WhatWhereWhen = () => (
  <div>
    <h1 className="heading">What, When
      <span className="heading2"> &amp; Where&#8230;</span>
    </h1>
    <div className="row" style={{ textAlign: 'center' }} >
      <div className="col">
        <img src={map} width="350" height="350" />
      </div>
      <div className="col verticalDivider">
        <p>
          <span className="heading2">
            <span className="heading">BH Pegasus </span>play at The Sports Centre, Porchester Square, Festival
  Place, in Basingstoke Town Centre.
  </span>
        </p>
        <p>
          <img src={shuttle} width="30" height="30" />
        </p>
        <p className="homepagesubtitle">Founded in 1996 by the merger of Brighton
    Hill and Pegasus Clubs, we play with feather shuttles and have our
    club night every Tuesday evening between 19.40 and 22.20.
    </p>
        <p><span className="heading2"><img src={shuttle} width="30" height="30" /></span></p>
        <p className="italicsmall">The Sports Centre is situated in the heart
  of Basingstoke Town Centre and is walking distance from both Railway
  and Bus Stations. There is plenty of parking in and around the Town
  Centre. </p>
      </div>
    </div>

  </div>
);

export default WhatWhereWhen;
