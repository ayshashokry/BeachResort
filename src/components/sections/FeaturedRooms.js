import React, { Component } from "react";
import { RoomsContext } from "../../globalState/contexts/RoomsProvider";
import { Title } from "../layout/Title";
import { Loading } from "./Loading";
import { Room } from "./Room";
import { Container, Row, Col } from "react-bootstrap";

export default class FeaturedRooms extends Component {
  render() {
    let room = this.context;

    let featuredRooms = room.featuredRooms.map(featureroom => {
      return <Room key={featureroom.id} room={featureroom} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {room.loading ? (
            <Loading />
          ) : (
            <Container>
              <Row>{featuredRooms}</Row>
            </Container>
          )}
        </div>
      </section>
    );
  }
}
FeaturedRooms.contextType = RoomsContext;
