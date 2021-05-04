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
                        <p className="line-1 ">My name is Laura Cejas. I am from Cuba. I am a Full-Stack Software developer
                        graduated from UNCC Boot
                        Camp. As an
                        organized and highly motivated person, I am able to adapt to any circumstance and always
                        give my
                        best in any project, at the same time I strive to work as a team and promote values.</p>
                        <p>
                            I enjoy being challenged and engaging with projects that requires me to step out of my
                            comfort zone and
                            knowledge set, as continuing to learn new languages and development techniques are
                            important
                            to
                    me.</p>
                    </div>
                </div>
            </div>

        )
    }

}

export default About;