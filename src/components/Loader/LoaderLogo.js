import React, { Component } from "react";
import { Hourglass } from 'react-loader-spinner';
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
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{
                position: 'absolute',
                top: '35%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              wrapperClass=""
              colors={['#FEFEFE', '#FEFEFE']}
            />
            
            <img 
              src="/assets/l1.png"
              alt="Logo Loader"
              className="logo-loaders"
              style={{ display: 'block', width: '100%' }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default LogoLoader;
