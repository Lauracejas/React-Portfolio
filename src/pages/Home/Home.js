import React from 'react';
import "./home.css"
import Typed from "react-typed"
// import Particles from "../../components/layouts/Particles"

import Photo from "../../assets/me.jpg"

const Header = () => {

  return (
    <div id="home" className="intro route bg-image background">

      <div className="intro-content hero display-table">
        <div className="table-cell">
          <div className="row container align-self-center">
            <div className="col-sm-3 work-img">
              <img src={Photo} alt="" className="port" />
            </div>
            <div className="col-sm-8 letters">
              <h1 className="intro-title mb-4">Hello, I am Laura Cejas</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider"> Junior Full - Stack Software Developer
                {/* <Typed
                  strings={[
                    "Front End Developer",
                    "Back End Developer",
                    "Software Engineer"
                  ]}
                  typeSpeed={80}
                  backDelay={1100}
                  backSpeed={30}
                  loop
                /> */}
                </strong>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )

}

export default Header;