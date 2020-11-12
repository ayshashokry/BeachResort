import React, { Component } from "react";

export default class RoomsContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      featuredRooms: [],
      sortedRooms: [],
      loading: true
    };
  }
  render() {
    return <></>;
  }
}
