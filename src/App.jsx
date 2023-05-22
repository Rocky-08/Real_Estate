import React from "react";
import NavBar from "./Navbar/NavBar";
import FirstMainDiv from "./FirstMainDiv/FirstMainDiv";
import SecondDivCards from "./SecondDivCards/SecondDivCards";
import FindMore from "./ThirdDiv/FindMore";
import Needs from "./Needs/Needs";
import AboutUs from "./About Us/AboutUs";

const App = () => {
  return (
    <>
      <NavBar />
      <FirstMainDiv />
      <SecondDivCards />
      <FindMore />
      <Needs />
      <AboutUs />
    </>
  );
};

export default App;
