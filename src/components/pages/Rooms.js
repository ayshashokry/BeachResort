import React from "react";
import { Header } from "../layout/Header";
import { Banner } from "../layout/Banner";
import { Link } from "react-router-dom";

export const Rooms = () => {
  return (
    <div>
      <Header header="roomsHeader">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </Banner>
      </Header>
    </div>
  );
};
