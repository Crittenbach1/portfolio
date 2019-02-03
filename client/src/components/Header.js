import React, { Component } from 'react';
import {Animated} from "react-animated-css";


class Header extends Component {
  render() {
    return (
      <div class="layer">
        <div class="header">
         <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <h1 class="header-text1">CYNTHIA RITTENBACH</h1>
            <h4 class="header-text2">FULL STACK WEB DEVELOPER</h4>
          </Animated>
        </div>
      </div>

    );
  }
}

export default Header;
