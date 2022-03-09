import React from "react";
import HeaderNavMenu from "./HeaderNavMenu";
import useMediaQuery from '@mui/material/useMediaQuery';


const Header = () => {
  const topMarginMQ = useMediaQuery('(min-width:576px)');
  const menuBtnStyle = {
    float: 'right',
    marginRight: '1rem',
    marginTop: (topMarginMQ ? "1.3rem" : "1rem")
  }

  return(
    <div id="utk-header-segment">

      {/* Lets ignore this for now...
      <a className="sr-only sr-only-focusable" href="#content" title="Skip to content">Skip to content</a>
      <a className="sr-only sr-only-focusable" href="#mainnav" title="Skip to  main navigation">Skip to main navigation</a>
      <a className="sr-only sr-only-focusable" href="https://oed.utk.edu/ada/campus-accessibility/"
        title="Report an accessibility issue">Report an accessibility issue</a> */}
  
      <header id="main-navigation" role="banner">
        <div className="container-columns">
          <h1 className="ut-title">
            <a className="killer-logo" href="http://www.utk.edu">The University of Tennessee, Knoxville</a>
          </h1>
          <HeaderNavMenu btnStyle={menuBtnStyle}/>
          <h2 className="site-title parent-show">
            <a href="http://innovate.utk.edu" title="Innovation & Collaboration Studio" rel="home">Innovation &amp; Collaboration Studio</a>
            <br/> {/* br origionally first element of TCE link */}
            <a href="https://tickle.utk.edu"><small>Tickle College of Engineering</small></a>
          </h2>
        </div>
      </header>
    </div>
  )
};

export default Header;
