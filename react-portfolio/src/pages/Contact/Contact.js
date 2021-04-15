import React from 'react';
import "./contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub,  } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {

    // const contact = {
    //     pitch: "You can send me a message",
    //     copyright: "Laura Cejas",
    //     contactUrl: ''
    // }
    // // Paste your respective social media links. You can omit any if you dont have it
    // // Upload your resume in your drive, get the shaareable link and paste it in the resume section
    const social = {
        github: 'https://github.com/Lauracejas',
        linkedin: 'https://www.linkedin.com/in/laura-cejas-058913155/',
        resume: 'https://novoresume.com/'
    }

    return (

        <div className="hero parallax text-center">
            <h1>Get in Touch</h1>
            <div className="row">

                <div className="input-group col-6 col-sm-6 half mb-3">
                    <input type="text" id="fname" name="firstname" placeholder="Your name" required></input>
                    <input type="mail" id="mailid" name="Email" placeholder="Email Address" required></input>
                    <textarea id="msg" name="message" placeholder="Message" required></textarea>
                    <button type="button" className="btn btn-primary">Send Message</button>

                </div>
                <div className=" col-6 col-sm-6 half mb-3">
                    <p className="contact-me">Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                Simply fill the from and send me an email.</p>                
               
                    <a title="Visit GitHub profile" href={social.github}><FontAwesomeIcon icon={faGithub} /></a>
                    <a title="Visit Linkedin profile" href={social.linkedin}><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a title="Visit Linkedin profile" href={social.resume}><FontAwesomeIcon icon={faUser} /> </a>                     
                
                </div>
            </div>
        </div>

    )

}

export default Contact