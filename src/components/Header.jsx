import React from "react";


const Header = () => {

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
          <h2 className="site-title parent-show">
            <a href="http://innovate.utk.edu" title="Innovation & Collaboration Studio" rel="home">Innovation &amp; Collaboration Studio</a>
            <br/> {/* br origionally first element of TCE link */}
            <a href="https://tickle.utk.edu"><small>Tickle College of Engineering</small></a>
          </h2>
          <button type="button" className="btn btn-findpage">
            <span className="sr-only">Toggle navigation</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z" />
            </svg>
            <br/>
            Menu
          </button>
        </div>
      </header>
    </div>
  )
};

export default Header;
