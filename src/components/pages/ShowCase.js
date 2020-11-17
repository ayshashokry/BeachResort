import React, { Component } from "react";
import ReactJoyride from "react-joyride";

export default class ShowCase extends Component {
  constructor() {
    super();
    this.state = {
      run: true,
      steps: [
        {
          target: ".tour1",
          disableBeacon: true,
          content: "This is a cool feature of my website!"
        },
        {
          target: ".tour2",
          content: "This is a cool feature of my website!"
        },
        {
          target: ".tour3",
          content: "This is a cool feature of my website!"
        }
      ]
    };
  }
  handleClick = e => {
    e.preventDefault();

    this.setState({
      run: true
    });
  };
  render() {
    return (
      <div className="app">
        <ReactJoyride
          steps={this.state.steps}
          run={true}
          continuous
          showProgress
          showSkipButton
          styles={{
            options: {
              arrowColor: "#e3ffeb",
              backgroundColor: "#e3ffeb",
              overlayColor: "rgba(79, 26, 0, 0.4)",
              primaryColor: "#000",
              textColor: "#004a14",
              width: 900,
              zIndex: 1000
            }
          }}
        />
        <button title="Close" onClick={this.handleClick}>
          Start
        </button>
        <h3 className="tour1">Hey! I am a cool feature!</h3>{" "}
        <h3 className="tour2">Hey! I am a cool feature!</h3>{" "}
        <h3 className="tour3">Hey! I am a cool feature!</h3>
      </div>
    );
  }
}
