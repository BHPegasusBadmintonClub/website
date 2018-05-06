import React from 'react';
import RolloverImage from '../components/rolloverImage';
import bdbl1 from '../layouts/images/links/bdbl1.gif';
import bdbl2 from '../layouts/images/links/bdbl2.gif';

import newbury1 from '../layouts/images/links/newbury1.gif';
import newbury2 from '../layouts/images/links/newbury2.gif';

import badmintonengland1 from '../layouts/images/links/badmintonengland1.gif';
import badmintonengland2 from '../layouts/images/links/badmintonengland2.gif';

import hampshire1 from '../layouts/images/links/hampshire1.gif';
import hampshire2 from '../layouts/images/links/hampshire2.gif';

import sportscentre3 from '../layouts/images/links/sportscentre3.gif';
import sportscentre4 from '../layouts/images/links/sportscentre4.gif';


const Links = () => (
  <div>
    <h1 className="heading">Links
    </h1>
    <table width="740" height="360" border="0" cellpadding="0" cellspacing="0">
      <tr align="center" valign="middle">
        <td width="470" height="120">
          <RolloverImage
            src={bdbl1}
            hoverSrc={bdbl2}
            link="http://www.bdbl.org.uk" />
          <br />
        </td>
        <td>
          <RolloverImage
            src={badmintonengland1}
            hoverSrc={badmintonengland2}
            link="http://www.badmintonengland.co.uk" />
        </td>
      </tr>
      <tr align="center" valign="middle">
        <td height="120">
          <RolloverImage
            src={newbury1}
            hoverSrc={newbury2}
            link="http://www.ndba.co.uk" />
          <br />
        </td>
        <td class="postcode"><p>Please click on a logo to open another<br />
          window and view each website.</p></td>
      </tr>
      <tr align="center" valign="middle">
        <td height="120">
          <RolloverImage
            src={hampshire1}
            hoverSrc={hampshire2}
            link="http://www.hampshirebadminton.co.uk" />

        </td>
        <td height="90">
          <RolloverImage
            src={sportscentre3}
            hoverSrc={sportscentre4}
            link="http://www.sportscentre.org.uk" />

        </td>
      </tr>
    </table>
  </div>
)

export default Links;
