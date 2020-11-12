import React from "react";

export const Header = ({ children, header }) => {
  return <header className={header}>{children}</header>;
};

Header.defaultProps = {
  header: "defaultHeader"
};
