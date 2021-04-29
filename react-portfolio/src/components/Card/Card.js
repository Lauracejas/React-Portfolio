import React from "react";
import "./card.css"


function Card(props) {    
    console.log(props.image);
    return (
        
        <div className="cards col-sm-3 text-white">
           
            <div className="card-img cardImages" >
                <img className="card-img" src={props.image} alt={props.title} />
                <h4 className="card-title">{props.title}</h4>
                <p className="card-tech">{props.description}</p>
                <a href={props.deployUrl} className="btn btn-outline-info link">Deployed Link</a>
                <a href={props.gitRepoUrl}
                    className="btn btn-outline-info link">GitHub Repo</a>

            </div>
        </div> 
        
    )
}

export default Card;
