import React from "react";
import NavBar from "./Navbar/NavBar";
import FirstMainDiv from "./FirstMainDiv/FirstMainDiv";
import SecondDivCards from "./SecondDivCards/SecondDivCards";
import FindMore from "./ThirdDiv/FindMore";
import Needs from "./Needs/Needs";
import AboutUs from "./About Us/AboutUs";

const MainPage = (prop) => {
  return (
    <>
      <NavBar
        openFun={prop.openFun}
        openLoginPage={prop.openLoginPage}
        show={prop.show}
      />
      <FirstMainDiv />
      <SecondDivCards />
      <FindMore />
      <Needs />
      <AboutUs />
    </>
  );
};

export default MainPage;
