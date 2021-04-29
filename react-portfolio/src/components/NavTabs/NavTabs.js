import React from "react";
import "./navtabs.css"

function NavTabs(props) {


    return (
        <nav className="navBar">
    <ul className="nav nav-tabs" >
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
                    Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
                    About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Projects"
          onClick={() => props.handlePageChange("Projects")}
          className={props.currentPage === "Projects" ? "nav-link active" : "nav-link"}
        >
                    Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
                    Contact
        </a>
      </li>
    </ul>
</nav>
    );
}

export default NavTabs;