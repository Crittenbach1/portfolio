import React, { Component } from 'react';
import Image from '../media/cynthia.jpg';
import Blog from '../media/blog.svg';
import Email from '../media/email.png';
import Github from '../media/github.png';
import Linkedin from '../media/linkedin.png';

class AboutMe extends Component {
  render() {
    return (
      <div class="aboutme">
        <div class="row">
         <div class="col-1">
           <img class="aboutmeimg" src={Image} />
         </div>

          <div class="col-1">
           <p class="aboutMeTextdiv">
             Hi, I'm Cynthia! I am a Full Stack Web Developer with a background in liberal arts
             and music performance. Having a high degree of intellectual curiosity I am
             constantly searching for challenges and ways to bring something new into the world.
             Feel free to get in touch!
           </p>

           <div class="iconDiv">
              <a href="default.asp">
                <img class="icon" src={Github} alt="github" />
              </a>
              <a href="default.asp">
                <img class="icon" src={Email} alt="email" />
              </a>
              <a href="default.asp">
                <img class="icon" src={Linkedin} alt="linkedin" />
              </a>
              <a href="default.asp">
                <img class="icon" src={Blog} alt="blog" />
              </a>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
