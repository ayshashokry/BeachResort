import React, { Component, createContext } from "react";
import items from "../../data";
export const RoomsContext = createContext();
export default class RoomsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      featuredRooms: [],
      sortedRooms: [],
      loading: true
    };
  }

  getData = rooms => {
    let roomsItems = rooms.map(room => {
      let id = room.sys.id;
      let images = room.fields.images.map(image => image.fields.file.url);
      let roomsdetails = { ...room.fields, images, id };
      return roomsdetails;
    });
    return roomsItems;
  };

  //getRoomsData
  componentDidMount() {
    let rooms = this.getData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false
    });
  }

  getRoomDetails = slug => {
    let roomsItems = [...this.state.rooms];
    let roomdetails = roomsItems.find(room => room.slug === slug);
    return roomdetails;
  };

  render() {
    return (
      <RoomsContext.Provider
        value={{
          ...this.state,
          getRoomDetails: this.getRoomDetails
        }}
      >
        {this.props.children}
      </RoomsContext.Provider>
    );
  }
}
