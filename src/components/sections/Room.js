import React from "react";
import defaultImg from "../../images/room-1.jpeg";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
export const Room = ({ room }) => {
  return (
    <Col sm={12} lg={4} style={{ position: "relative" }}>
      <article className="room">
        <div className="img-container">
          <img src={room.images[0] || defaultImg} alt="Single Room" />{" "}
          <div className="price-top">
            <h6>${room.price}</h6>
            <p>per night</p>
          </div>
          <Link to={`rooms/${room.slug}`} className="btn-primary room-link">
            Features
          </Link>
        </div>
        <p className="room-info"> {room.name}</p>
      </article>
    </Col>
  );
};
