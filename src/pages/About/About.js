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
                        <p className="line-1 ">My name is Laura Cejas. I am from Cuba. Front-end web developer
                         leveraging psychology background to build a more intuitive user experience on the web. Recently
                          earned a certificate in full stack development from the University of North Carolina at Charlotte , with newly developed skills
                           in JavaScript, CSS, React.js, and responsive web design. Known as an innovative problem solver
                            passionate about developing apps, with a focus on mobile-first design and development.
                              </p>
                        <p>
                        With each project, my aim is to best engage my audience for an impactful user experience.
                              I applied aspects of UX and agile development in a recent project. I worked on a team of
                               four to develop a single-page MERN app that helps local business owners track their sales, 
                               inventory, and attendance at specialty events. I’m excited
                         to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
                    me.</p>
                    </div>
                </div>
            </div>

        )
    }

}

export default About;