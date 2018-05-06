import React from 'react';
import bullet from '../layouts/images/faqs/shuttlebullet.jpg';
import lineup from '../layouts/images/faqs/lineup.jpg';
import shuttle from '../layouts/images/faqs/shuttle.jpg';

const Faqs = () => (
  <div>
    <h1 className="heading">FAQ'S
      <span className="heading2"> and Answers</span>
    </h1>
    <div className="row">
      <div className="col-md-8 col-sm-12">
        <p className="bhp">
          <span className="newsheading">
            <img src={bullet} width="30" height="30" />
            <br /> What night is Club night?</span>
          <font size="-7" face="Verdana, Arial, Helvetica, sans-serif">
            <span className="bhp">
              <font color="#666633">
                <br />
              </font>
            </span>
          </font>
          <span className="newsinfo">Club night is Tuesdays 19.40 until 22.20. Any visitor will be expected to pay a visitors fee.
        <br />
          </span>
          <span className="newsheading">
            <br />
            <img src={bullet} width="30" height="30" />
            <br /> Must I be of a particular standard to attend club nights?</span>
          <span className="bhp">
            <font size="-7" face="Verdana, Arial, Helvetica, sans-serif">
              <font color="#666633">
                <br />
              </font>
            </font>
          </span>
          <span className="newsinfo">We are flexible on standard, however, to be fair to other club members you should be better than complete
        beginner. If in doubt, please come along and observe the standard of play or contact us via email.
        <br />
          </span>
          <span className="newsheading">
            <br />
            <img src={bullet} width="30" height="30" />
            <br /> Are there any teams I can join?</span>
          <font size="-7" face="Verdana, Arial, Helvetica, sans-serif">
            <span className="bhp">
              <font color="#666633">
                <br />
              </font>
            </span>
          </font>
          <span className="newsinfo">Yes. we 1 mixed and 3 open teams in the <a href="http://bdbl.co.uk">Basingstoke League (BDBL)</a>,
          and one mixed team in the <a href="http://www.nbdl.co.uk">Newbury League (NBDL)</a>.
            <br />Some of our members
        are also asked to represent the Basingstoke League teams (ladies and mens) which participate in the
        {' '}<a href="http://www.acdbl.co.uk" target="_blank">Aldershot and Camberley League (ACDBL).</a>
            <br />
          </span>
          <span className="newsheading">
            <br />
            <img src={bullet} width="30" height="30" />
            <br /> What happened to the Mens team?

      </span>
          <font size="-7" face="Verdana, Arial, Helvetica, sans-serif">
            <font color="#666633">
              <span className="bhp">
                <br />
              </span>
            </font>
          </font>
          <span className="newsinfo">The Basingstoke League (BDBL) voted at it's 2014 AGM to replace the Mens divisions with Open divisions.
        Most clubs will probably still field mostly men in these teams, but the team is open to men and women.
        For example, a team could consist of 5 men and 1 woman, 3 mixed pairs, or 6 women. The club can vary
        the team's make up from match to match and there is no requirement for two competing teams to compose
        of the same combination of men and women.</span>
        </p>
        <p className="bhp">
          <span className="newsheading">
            <img src={bullet} width="30" height="30" />
            <br /> What is the Open team?</span>
          <font size="-7" face="Verdana, Arial, Helvetica, sans-serif">
            <span className="bhp">
              <font color="#666633">
                <br />
              </font>
            </span>
          </font>
          <span className="newsinfo">See &quot;What happened to the Mens team&quot; above.</span>
        </p>

        <p className="bhp">
          <span className="newsheading">
            <img src={bullet} width="30" height="30" />
            <br /> Will the new scoring system be used?
        <br />
          </span>
          <span className="newsinfo">The proposed changes to the scoring system (games played to 11 instead of 21) will not affect the BDBL
        in the 2014/15 season. Games will still be played to 21 as before.</span>
          <span className="newsheading">
            <br />
            <br />
            <img src={bullet} width="30" height="30" />
            <br /> When is Match night?</span>
          <font size="-7" face="Verdana, Arial, Helvetica, sans-serif">
            <span className="bhp">
              <font color="#666633">
                <br />
              </font>
            </span>
          </font>
          <span className="newsinfo">Match night is Tuesday also. This season we have combined club and match night in order to make the
        club even more sociable and so we can support our teams more easily. Due to the number of teams there
        are some overflow matches which are generally played on a Thursday night at The Sports Centre.
        <br />
          </span>
          <span className="newsheading">
            <br />
            <img src={bullet} width="30" height="30" />
            <br /> Are there any tournaments in the area?</span>
          <font size="-7" face="Verdana, Arial, Helvetica, sans-serif">
            <span className="bhp">
              <font color="#666633">
                <br />
              </font>
            </span>
          </font>
          <span className="newsinfo">All the leagues run their own tournaments throughout the season and so there is plenty of opportunity
        for tournament play (Open &amp; Handicapped) as long as you are a paid up member of a club registered
        to play in that league. </span>
        </p>
        <p className="bhp">&nbsp;</p>
      </div>
      <div className="col-md-4 col-sm-12" style={{ textAlign: 'center' }}>
        <p><img src={lineup} /></p>
        <p><img src={shuttle} width="200" height="200" /></p>
      </div>
    </div>

  </div>
);

export default Faqs;
