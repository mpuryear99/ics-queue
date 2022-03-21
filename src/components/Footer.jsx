import React from "react";
import logobobisvg from '../media/logo-bobi.svg';


const Footer = () => {

  return(
    <div id="utk-footer-segment">

      <footer id="colophon" className="site-footer" role="contentinfo">
        <div className="container">
          <div id="siteinfo">
            <div id="meta-info">
              <p>
                <strong className="sitetitle">Innovation &amp; Collaboration Studio</strong>
                <br/>
                <a href="http://tickle.utk.edu">
                  <i>Tickle College of Engineering</i>
                </a>
                <br/>
              </p>
            </div>
            <div id="meta-contact">
              <p>
                B2 Perkins Hall, Knoxville, TN 37996
                <span className="emailList">
                  <br/>
                  Email:&nbsp;
                  <a href="mailto:ics@utk.edu">ics@utk.edu</a>
                </span>
              </p>
              <a className="sm-icon twitter" href="http://twitter.com/UTK_TCE">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0v24h24v-24h-24zm18.862 9.237c.208 4.617-3.235 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.079-4.03 3.198-4.03.944 0 1.797.398 2.396 1.037.748-.147 1.451-.42 2.085-.796-.245.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.44.656-.997 1.234-1.638 1.697z" />
                </svg>
              </a>
              <a className="sm-icon facebook" href="https://www.facebook.com/UTK.TCE">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0v24h24v-24h-24zm16 7h-1.923c-.616 0-1.077.252-1.077.889v1.111h3l-.239 3h-2.761v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                </svg>
              </a>
              <a className="sm-icon linkedin" href="https://www.linkedin.com/school/utk.tce/">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a className="sm-icon youtube" href="https://www.youtube.com/c/UTTickleCollegeofEngineering">
                <span className="sr-only">YouTube</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-9.333v24h-24v-24h24zm-4 12c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0-2.598.177-2.904 1.747-2.924 5.877.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0 2.598-.177 2.904-1.747 2.924-5.877z" />
                </svg>
              </a>
              <a className="sm-icon instagram" href="https://www.instagram.com/utk.tce/">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div> {/* #siteinfo */}
        </div>


        <div id="campus-footer">
          <div className="container">
            <div id="utk">
              <div id="bobi">
                <a href="http://www.utk.edu">
                  {/* <img src='%PUBLIC_URL%/media/logo-bobi.svg'/> */}
                  <img src={logobobisvg} alt="" />
                </a>
              </div>
              <div id="address">
                <p>
                  <strong>The University of Tennessee, Knoxville</strong>
                  <br/>Knoxville, Tennessee 37996<br/>
                  <a href="tel:+18659741000" className="tel">865-974-1000</a>
                </p>
              </div>
            </div>

            <div id="toolkit">
              <form id="utk_seek" method="GET" action="//search.utk.edu/">
                {/* <label htmlFor="utk_seek" className="sr-only">Search for:</label> */}
                <div className="form-group">
                  <input type="text" name="q" /* id="utk_seek" */
                    placeholder="Search utk.edu"
                    className="form-control" title="Search"/>
                </div>
                <input type="submit" value="Go" title="Submit" className="btn btn-orange"/>
              </form>
              <br/>
              <nav role="navigation">
                <a href="http://calendar.utk.edu/">Events</a>
                <a href="http://www.utk.edu/alpha/">A-Z </a>
                <a href="http://www.utk.edu/admissions/">Apply</a>
                <a href="https://www.utk.edu/aboutut/privacy/">Privacy</a>
                <a href="http://maps.utk.edu/">Map</a>
                <a href="http://directory.utk.edu">Directory</a>
                <a href="http://giveto.utk.edu">Give to UT</a>
                <a href="https://oed.utk.edu/ada/campus-accessibility/">Accessibility</a>
              </nav>
            </div>
          </div>
        </div>
      </footer> {/* #colophon */}

      <div id="system-indicia">
        <div className="container">
          <div className="col">
            <p className="system">
              The flagship campus of&nbsp;
              <a href="http://tennessee.edu">the University of Tennessee System</a>
              &nbsp;and partner in&nbsp;
              <a href="http://www.tntransferpathway.org/">the Tennessee Transfer Pathway</a>.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
};

export default Footer;
