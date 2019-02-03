import React, { Component } from 'react';
import {Animated} from "react-animated-css";


class Header extends Component {
  render() {
    return (

      <div class="layer">
         <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
         <div class="header">

            <h1 class="header-text1">CYNTHIA RITTENBACH</h1>
            <h4 class="header-text2">FULL STACK WEB DEVELOPER</h4>
         </div>
          </Animated>
      </div>

    );
  }
}

export default Header;
