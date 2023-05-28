import React from "react";
import NavBarItems from "./NavBarItems";

const NavBar = (prop) => {
  return (
    <NavBarItems
      func={prop.openFun}
      login={prop.openLoginPage}
      check={prop.check}
      handledark={prop.handledark}
    />
  );
};

export default NavBar;
