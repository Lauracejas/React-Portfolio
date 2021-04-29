import React from 'react';
import "./contact.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin, faGithub,  } from "@fortawesome/free-brands-svg-icons";
// import { faUser } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {

    const social = {
        github: 'https://github.com/Lauracejas',
        linkedin: 'https://www.linkedin.com/in/laura-cejas-058913155/',
        resume: '../../assets/Laura Cejas_Resume.docx.pdf/'
    }

    return (

        
            <div  className="Card text-center">
                <div className="Card">
                    <div className="  mx-auto">
                        <h1>Get in Touch</h1>
                    </div>
                
                <div className="container">
                    <div className=" row">

                        <div className="input-group  col-sm-6 mb-3">
                            <form >
                                <input type="text" id="fname" name="firstname" placeholder="Your name" required></input>
                                <input type="mail" id="mailid" name="Email" placeholder="Email Address" required></input>
                                <textarea id="msg" name="message" placeholder="Message" required></textarea>
                                <button type="button" className="btn btn-primary">Send Message</button>
                            </form>

                        </div>
                        <div className="col-12 col-sm-6 half">
                            <p className="contact-me">Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                             Simply fill the from and send me an email.</p>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="inline-block">
                                    {<a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank" href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                                    {<a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}<br />
                                </div>
                                {<a title="Download Resume" href={social.resume} download><i className="fas fa-download"></i></a>}
                            </div>
                        </div>
                        {/* <div className=" col-sm-6  mb-3">
                    <p className="contact-me">Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                      Simply fill the from and send me an email.</p>   


               
                    {/* <a id="icon" title="Visit GitHub profile" href={social.github}><FontAwesomeIcon icon={faGithub} /></a>
                    <a id="icon" title="Visit Linkedin profile" href={social.linkedin}><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a id="icon" title="Visit Linkedin profile" href={social.resume}><FontAwesomeIcon icon={faUser} /> </a>                     
                 
                    </div> */}
                    </div>
                </div>
            </div>
            </div>
    

    )

}

export default Contact