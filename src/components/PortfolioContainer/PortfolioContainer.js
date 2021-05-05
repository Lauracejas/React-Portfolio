import React, { Component } from "react";
// import Particles from "../layouts/Particles"
import NavTabs from "../NavTabs/NavTabs";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";
import Contact from "../../pages/Contact/Contact";
import Footer from "../Footer/Footer";
import "./portfolio.css"

class PortfolioContainer extends Component {
  
  state = {
    currentPage: "Home"
  };


  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Projects") {
      return <Projects />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div >
        <div>
          <NavTabs
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
        </div>
          {this.renderPage()}
          {/* <Particles /> */}


        <Footer />
      </div>
    );
  }
}

export default PortfolioContainer;