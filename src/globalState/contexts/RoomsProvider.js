import React, { Component, createContext } from "react";
import items from "../../data";
const RoomsContext = createContext();
class RoomsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      featuredRooms: [],
      sortedRooms: [],
      loading: true,
      type: "all",
      capacity: 0,
      minPrice: 0,
      maxPrice: 0,
      minSize: 0,
      maxSize: 0,
      breakfast: false,
      pets: false
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
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
    // console.log(event.target.type)
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      minPrice,
      maxPrice,
      breakfast,
      pets
    } = this.state;
    let tempRooms = [...rooms];
    capacity = parseInt(capacity);
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    tempRooms = tempRooms.filter(room => room.price <= price);
    tempRooms = tempRooms.filter(
      room => room.size <= maxSize && room.size >= minSize
    );

    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity === capacity);
    }
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    this.setState({ sortedRooms: tempRooms });
  };
  //getRoomsData
  componentDidMount() {
    let rooms = this.getData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    let maxPrice = Math.max(...rooms.map(room => room.price));
    let maxSize = Math.max(...rooms.map(room => room.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }

  getRoomDetails = slug => {
    let roomsItems = [...this.state.rooms];
    const roomdetails = roomsItems.find(room => room.slug === slug);
    return roomdetails;
  };

  render() {
    return (
      <RoomsContext.Provider
        value={{
          ...this.state,
          getRoomDetails: this.getRoomDetails,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomsContext.Provider>
    );
  }
}
const RoomsConsumer = RoomsContext.Consumer;
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomsConsumer>
        {value => <Component {...props} context={value} />}
      </RoomsConsumer>
    );
  };
}
export { RoomsProvider, RoomsConsumer, RoomsContext };
