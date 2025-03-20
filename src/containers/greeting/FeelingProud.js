import React, { Component } from "react";

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
        src="/assets/tt.png" // Image PNG transparente
        alt="Logo Loader"
        className="logo-loader"
      />
    );
  }
}

export default FeelingProud;
