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
  // handleClick = e => {
  //   e.preventDefault();

  //   this.setState({
  //    run: true
  //   });
  // };
  render() {
    return (
      <div className="app">
        <ReactJoyride
          steps={this.state.steps}
          run={this.state.run}
          continuous
          showProgress
          showSkipButton
          styles={{
            options: {
              // modal arrow and background color
              arrowColor: "#eee",
              backgroundColor: "#eee",
              // page overlay color
              overlayColor: "rgba(79, 26, 0, 0.4)",
              //button color
              primaryColor: "mediumaquamarine",
              //text color
              textColor: "#333",

              //width of modal
              width: 500,
              //zindex of modal
              zIndex: 1000
            }
          }}
        />
        <button onClick={this.handleClick}>Start</button>
        <h3 className="tour1">Hey! I am a cool feature!</h3>{" "}
        <h3 className="tour2">Hey! I am a cool feature!</h3>{" "}
        <h3 className="tour3">Hey! I am a cool feature!</h3>
      </div>
    );
  }
}
