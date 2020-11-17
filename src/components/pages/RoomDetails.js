import React, { Component } from "react";
import { RoomsContext } from "../../globalState/contexts/RoomsProvider";
import { Link } from "react-router-dom";
import { Header } from "../layout/Header";
import { Banner } from "../layout/Banner";
import StyledHeader from "../layout/StyledHeader";

export default class RoomDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { slug: this.props.match.params.slug };
  }
  render() {
    let { getRoomDetails } = this.context;
    const roomdetails = getRoomDetails(this.state.slug);

    let renderDetails = roomdetails ? (
      <>
        <StyledHeader img={roomdetails.images[0]}>
          <Banner title={`${roomdetails.name} room`}>
            <Link className="btn-primary" to="/rooms">
              Back to rooms
            </Link>
          </Banner>
        </StyledHeader>
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
