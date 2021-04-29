import React from 'react';
import "./home.css"

import Photo from "../../assets/me.jpg"

const Header = () => {
    const header = "Laura Cejas"

    return (
        <div className="container-fluid  ">
            <div className="row text-center">
                <div className="photome col-sm-4">
                    <img className="photo" id="photome" alt=" Me" title="Me" src={Photo} />
                </div>
                <div className="Header col-sm-8">
                    <h1>{`I'm ${header}`}</h1>
                    <p className="line-1 ">I am a Full Stack Software Developer </p>

                </div>
                {/* <img id="not-dark" onClick={scrollTo} alt="Contact Me" title="Contact Me" className="gtp" src="profile.png"></img> */}

            </div>
        </div>
    )

}

export default Header;