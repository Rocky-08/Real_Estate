import React from "react";
import NavBarItems from "./NavBarItems";

const NavBar = (prop) => {
  return <NavBarItems func={prop.openFun} />;
};

export default NavBar;
