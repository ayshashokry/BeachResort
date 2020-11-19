import React, { Component } from "react";
import { RoomsContext } from "../../globalState/contexts/RoomsProvider";
import { Link } from "react-router-dom";
import { Banner } from "../layout/Banner";
import StyledHeader from "../layout/StyledHeader";
import defaultBcg from "../../images/room-1.jpeg";
export default class RoomDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { slug: this.props.match.params.slug, defaultBcg };
  }
  render() {
    let { getRoomDetails } = this.context;
    const roomdetails = getRoomDetails(this.state.slug);

    let renderDetails = roomdetails ? (
      <>
        <StyledHeader img={roomdetails.images[0] || this.state.defaultBcg}>
          <Banner title={`${roomdetails.name} room`}>
            <Link className="btn-primary" to="/rooms">
              Back to rooms
            </Link>
          </Banner>
        </StyledHeader>
        <section className="single-room">
          <div className="single-room-images">
            {roomdetails.images.map((image, index) => {
              return <img key={index} src={image} alt={roomdetails.name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{roomdetails.description}</p>
            </article>
            <article className="info">
              <h3>Information</h3>
              <h6>Price: ${roomdetails.price} </h6>
              <h6>Size:{roomdetails.size} SQFT </h6>
              <h6>
                Maximum Capacity:
                {roomdetails.capacity > 1
                  ? `${roomdetails.capacity} People`
                  : `${roomdetails.capacity} Person`}
              </h6>
              <h6> {roomdetails.pets ? "Pets Allowed" : "No pets allowed"}</h6>
              <h6>{roomdetails.breakfast && "Free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className='room-extras'>
          <h6>Extras</h6>
          <ul className='extras'>
            {roomdetails.extras.map((extra,index)=>{
              return <li key={index}>- {extra}</li>
            })}
          </ul>

        </section>
      </>
    ) : (
      <div className="error">
        <h3>no such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          Back to rooms
        </Link>
      </div>
    );

    return <>{renderDetails}</>;
  }
}

RoomDetails.contextType = RoomsContext;
