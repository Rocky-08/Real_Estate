import React, { useState } from "react";
import NavBar from "./Navbar/NavBar";
import FirstMainDiv from "./FirstMainDiv/FirstMainDiv";
import SecondDivCards from "./SecondDivCards/SecondDivCards";
import FindMore from "./ThirdDiv/FindMore";
import Needs from "./Needs/Needs";
import AboutUs from "./About Us/AboutUs";
import SignUp from "./SignUp/SignUp";

const App = () => {
  const [open, setOpen] = useState(false);

  let handleClickOpen = () => {
    setOpen(true);
    console.log("open hogya");
  };

  let handleClickClose = () => {
    setOpen(false);
    console.log("close hogya");
  };
  return (
    <>
      <NavBar openFun={handleClickOpen} />
      {open ? (
        <SignUp dialOpen={open} closeFunc={handleClickClose} />
      ) : (
        <>
          <FirstMainDiv />
          <SecondDivCards />
          <FindMore />
          <Needs />
          <AboutUs />
        </>
      )}
    </>
  );
};

export default App;
