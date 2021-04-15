import React from 'react';
import "./contact.css"

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
        linkedin: 'https://linkedin.com',
        resume: 'https://novoresume.com/'
    }

    return (

        <div className="hero parallax text-center">
            <h1>Get in Touch</h1>
            <div className="row">

                <div className="input-group row col-12 col-sm-6 half mb-3">
                    <input type="text" id="fname" name="firstname" placeholder="Your name" required></input>
                    <input type="mail" id="mailid" name="Email" placeholder="Email Address" required></input>
                    <textarea id="msg" name="message" placeholder="Message" required></textarea>
                    <button type="button" className="btn btn-primary">Send Message</button>

                </div>
                <div className="row col-12 col-sm-6 half mb-3">
                    <p className="contact-me">Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                Simply fill the from and send me an email.</p>
                    <a title="Visit GitHub profile" href={social.github}><i className="bi bi-github"></i></a>
                    <a title="Visit Linkedin profile" href={social.linkedin}><i className="bi bi-linkedin"></i></a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-file-person-fill" viewBox="0 0 16 16">
                    <a title="Visit Linkedin profile" href={social.resume}>                        
                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z" /></a>
                     
                    </svg>

                </div>
            </div>
        </div>

    )

}

export default Contact