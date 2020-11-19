import React from "react";
import { Header } from "./Header";
import { Banner } from "./Banner";
import { Link } from "react-router-dom";

export const Errorr = () => {
  return (
    <div>
      <Header>
        <Banner title="404" subtitle="Page not found">
          <Link to="/" className="btn-primary">
            return to home
          </Link>
        </Banner>
      </Header>
    </div>
  );
};
