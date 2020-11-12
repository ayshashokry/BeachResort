import React from "react";
import { Header } from "../layout/Header";
import { Banner } from "../layout/Banner";
import { Services } from "../sections/Services";

import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <Header header="defaultHeader">
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at 200$"
        >
          <Link to="/rooms" className="btn-primary">
            {" "}
            Our Rooms
          </Link>
        </Banner>
      </Header>
      <Services />
    </div>
  );
};
