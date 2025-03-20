import React, { Component } from "react";
import "./LoaderLogo.css";

class LogoLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSmallScreen: window.innerWidth <= 600,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.checkScreenSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkScreenSize);
  }

  checkScreenSize = () => {
    this.setState({ isSmallScreen: window.innerWidth <= 600 });
  };

  render() {
    return (
      <div className="logo-loader-container">
        {this.state.isSmallScreen ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <img
            src="/assets/l1.png"
            alt="Logo Loader"
            className="logo-loaders"
          />
        )}
      </div>
    );
  }
}

export default LogoLoader;
