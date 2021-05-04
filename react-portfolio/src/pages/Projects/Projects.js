import React from "react";
import "./projects.css"
// import Card from "../../components/Card/Card";
// import projects from "../../ContentProject.json"
import stock from "../../assets/covid-cells.jpg";
import stock1 from "../../assets/revamped.JPG";
import stock2 from "../../assets/library.jpg";
import stock3 from "../../assets/password.jpg";
import stock4 from "../../assets/weather.jpg";
import stock5 from "../../assets/workout.jpg";

function Projects(props) {

  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">My Projects</h3>
              
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="cards col-sm-3 text-white">
            <div className="card-img cardImages" >
              <img className="card-img" src={stock} alt={props.title} />
              <h4 className="card-title">{props.title}</h4>
              <p className="card-tech">HTML, CSS, JavaScript, API</p>
              <a href="https://smoyamendez.github.io/covid-correlation-console/" className="btn btn-outline-info link">Deployed Link</a>
              <a href="https://github.com/Lauracejas/covid-correlation-console"
                className="btn btn-outline-info link">GitHub Repo</a>
            </div>
          </div>

          <div className="cards col-sm-3 text-white">
            <div className="card-img cardImages" >
              <img className="card-img" src={stock1} alt={props.title} />
              <h4 className="card-title">{props.title}</h4>
              <p className="card-tech">Reactjs, HTML, CSS, JavaScript, Express.js, Node.js, mysql2</p>
              <a href="https://e-commerce-revamped.herokuapp.com/" className="btn btn-outline-info link">Deployed Link</a>
              <a href="https://github.com/Lauracejas/e-commerce-customs"
                className="btn btn-outline-info link">GitHub Repo</a>
            </div>
          </div>

          <div className="cards col-sm-3 text-white">
            <div className="card-img cardImages" >
              <img className="card-img" src={stock2} alt={props.title} />
              <h4 className="card-title">{props.title}</h4>
              <p className="card-tech">Handlebars, CSS, JavaScript, Express.js, Node.js, mysql2, bcrypt</p>
              <a href="https://eyeread-app.herokuapp.com/login" className="btn btn-outline-info link">Deployed Link</a>
              <a href="https://github.com/Lauracejas/Project-2-Eye-Read"
                className="btn btn-outline-info link">GitHub Repo</a>
            </div>
          </div>

          <div className="cards col-sm-3 text-white">
            <div className="card-img cardImages" >
              <img className="card-img" src={stock3} alt={props.title} />
              <h4 className="card-title">{props.title}</h4>
              <p className="card-tech">HTML, CSS, JavaScript</p>
              <a href="https://lauracejas.github.io/Pasword-Generator/" className="btn btn-outline-info link">Deployed Link</a>
              <a href="https://github.com/Lauracejas/Pasword-Generator"
                className="btn btn-outline-info link">GitHub Repo</a>
            </div>
          </div>

          <div className="cards col-sm-3 text-white">
            <div className="card-img cardImages" >
              <img className="card-img" src={stock4} alt={props.title} />
              <h4 className="card-title">{props.title}</h4>
              <p className="card-tech">HTML, CSS, JavaScript, API, forecast</p>
              <a href="https://lauracejas.github.io/Weather-Dashboard/" className="btn btn-outline-info link">Deployed Link</a>
              <a href="https://github.com/Lauracejas/Weather-Dashboard"
                className="btn btn-outline-info link">GitHub Repo</a>
            </div>
          </div>

          <div className="cards col-sm-3 text-white">
            <div className="card-img cardImages" >
              <img className="card-img" src={stock5} alt={props.title} />
              <h4 className="card-title">{props.title}</h4>
              <p className="card-tech">HTML, CSS, JavaScript, Express.js, Node.js, mongodb</p>
              <a href="https://laura-workout-traker.herokuapp.com/?id=6077023875ed0600158b5145" className="btn btn-outline-info link">Deployed Link</a>
              <a href="https://github.com/Lauracejas/Workout-Tracker"
                className="btn btn-outline-info link">GitHub Repo</a>
            </div>
          </div>
          
        </div>
      </div>

    </section>

  )
}

export default Projects;