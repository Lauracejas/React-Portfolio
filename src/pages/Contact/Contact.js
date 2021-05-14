import React from 'react';
import "./contact.css";
// import imageOverlay from "../../assets/port.jpg"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin, faGithub,  } from "@fortawesome/free-brands-svg-icons";
// import { faUser } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (

    // <section
    //   className="paralax-mf footer-paralax bg-image sect-mt4 route"
    // // style={{ backgroundImage: "url(" + imageOverlay + ")" }}
    // >
    <div>
      <div className="container-fluid ">
        <div className="contact">
          <strong className="heading">Contact Me</strong>

          <div className="blueBack">
            <div className="more-info">
              <p className="lead">
                Whether you want to get in touch, talk about a project
                collaboration, or just say hi, I'd love to hear from
                you.
              </p>
            </div>
            <p><i className="fas fa-map-marker-alt"></i> Charlotte, NC, 28270</p>
            <p><i className="fas fa-phone"></i><a href="tel:9802750597"> (980) 275 0597</a></p>
            <p><i className="far fa-envelope"></i><a href="mailto:lauracejasmartin94@gmail.com"> lauracejasmartin94@gmail.com</a></p>
            <div className="buttonz">
              <a href="https://www.linkedin.com/in/laura-cejas-058913155/" target="blank" id="btn" className="button button-outline button-white"><span className="ico-circle">
                <i className="ion-social-linkedin"></i>
              </span>LinkedIn</a>
              <a href="https://github.com/Lauracejas" target="blank" id="btn" className="button button-outline button-white"><span className="ico-circle">
                <i className="ion-social-github"></i>
              </span>GitHub</a>
              <a href="https://docs.google.com/file/d/1wJGAUnAE_E9szG6E0pEJ2TMTP9lLuDZi/edit?ts=609e548b&gxids=7628" target="blank" id="btn" className="button button-outline button-white"><span className="ico-circle">
                <i className="ion-social-codepen"></i>
              </span>Resume</a>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* // </section> */}
    </div>
  );
}






export default Contact