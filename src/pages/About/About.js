import React, { Component } from 'react';
//import {Image, View} from "react-native";
//import Image from "../../components/Image/Image"
import "./about.css"

import Photo from "../../assets/me.jpg"

class About extends Component {
    render() {

        return (
            <div className="container-fluid">
                <div className="row  align-self-center">
                    <img src={Photo} id="photome" alt="logo" />
                    <div className="about align-self-center col-sm-8">
                        <h1>About Me</h1>
                        <div className="textMe">
                        <p className="line-1 ">I am from Cuba. I am a Full-Stack Web Developer with a background in Engineering.  I recently earned a certificate in Full Stack Development from the BootCamp of University of North Carolina at Charlotte, where I developed skills in JavaScript, HTML, CSS, React.js, and responsive web design. </p>
                            <p>An innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. My degree in Engineer have prepared me to approach problems with creativity and teamwork.</p>
                        <p>With each project, my aim is to best engage my audience for an impactful user experience.
                              I applied aspects of UX and agile development in a recent project. I’m excited
                         to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
                        me.</p>
                        <p>When I’m not designing or developing, I enjoy hiking, camping, trying out a new recipe, or reading up on the latest trends in web and mobile design.
                        </p>
                        <p>I’m excited to leverage my skills in the future as part of a fast-paced, quality-driven team. Reach out to me to chat about our next project <a href="https://www.linkedin.com/in/laura-cejas-058913155/">here.</a></p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default About;