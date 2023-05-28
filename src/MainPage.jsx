import React from "react";
import NavBar from "./Navbar/NavBar";
import FirstMainDiv from "./FirstMainDiv/FirstMainDiv";
import SecondDivCards from "./SecondDivCards/SecondDivCards";
import FindMore from "./ThirdDiv/FindMore";
import Needs from "./Needs/Needs";
import AboutUs from "./About Us/AboutUs";
import CssBaseline from "@mui/material/CssBaseline";

const MainPage = (prop) => {
  return (
    <>
      <NavBar
        openFun={prop.openFun}
        openLoginPage={prop.openLoginPage}
        show={prop.show}
        handledark={prop.handledark}
        check={prop.check}
      />
      <FirstMainDiv />
      <SecondDivCards openCard={prop.openCard} />
      <FindMore check={prop.check} />
      <Needs />
      <AboutUs check={prop.check} />
    </>
  );
};

export default MainPage;
