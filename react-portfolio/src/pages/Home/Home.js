import React from 'react';
import "./home.css"


const Header = () => {
    const header = "Laura Cejas"

    return (
        <div className="hero text-center">
            <div className="photome">
            <img className="photo" id="photo" alt=" Me" title="Me"  src="../../assets/me.jpg" />
            </div>
            <div className="Header">
                <h1>{`I'm ${header}`}</h1>
                <p className="line-1 ">I am a Full Stack Software Developer </p>
              
            </div>
            {/* <img id="not-dark" onClick={scrollTo} alt="Contact Me" title="Contact Me" className="gtp" src="profile.png"></img> */}

        </div>
    )

}

export default Header;