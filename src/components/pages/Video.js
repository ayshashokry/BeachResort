import React, { Component } from "react";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

export class Video extends Component {
  constructor() {
    super();
    this.videoo = React.createRef();
  }
  // componentDidMount() {
  //   document.querySelector("video").play();
  //   document.querySelector("video").addEventListener("ended", function() {
  //     this.play();
  //   });
  // }
  onend = () => {
    console.log("video is ended hahahha");
  };

  render() {
    return (
      <Container>
        <Row>
          <Col className="py-4" md={12}>
            <video
              autoPlay muted
              src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
              poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
              width="620"
              onEnded={this.onend}
              ref={this.videoo}
              id="myVideo"
            ></video>
          </Col>
        </Row>
      </Container>
    );
  }
}
