import React from 'react';
import "./home.css"
import Typed from "react-typed"

import Photo from "../../assets/me.jpg"

const Header = () => {
   
    return (
        <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content hero display-table">
          <div className="table-cell">
            <div className="container">
            <div className="work-img">
                    <img src={Photo} alt="" className="img-fluid" />
                  </div>
              <h1 className="intro-title mb-4">Hello, I am Laura Cejas</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Front End Developer",
                      "Back End Developer",
                      "Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                {/* <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    )

}

export default Header;