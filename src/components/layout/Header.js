import React from "react";
import "../../stylesheets/NavBarr.css";
export const Header = ({ children, header }) => {
  return <header className={header}>{children}</header>;
};

Header.defaultProps = {
  header: "defaultHeader"
};
