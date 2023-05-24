import React, { useState } from "react";
import NavBar from "./Navbar/NavBar";
import FirstMainDiv from "./FirstMainDiv/FirstMainDiv";
import SecondDivCards from "./SecondDivCards/SecondDivCards";
import FindMore from "./ThirdDiv/FindMore";
import Needs from "./Needs/Needs";
import AboutUs from "./About Us/AboutUs";
import SignUp from "./SignUp/SignUp";
import LoginPage from "./Login/LoginPage";

const App = () => {
  const [open, setOpen] = useState(false);

  const [openLogin, setOpenLogin] = useState(false);

  let handleClickOpen = () => {
    setOpen(true);
    console.log("open hogya");
  };

  let handleClickClose = () => {
    setOpen(false);
    console.log("close hogya");
  };

  let handleOpenLogin = () => {
    setOpenLogin(true);
    console.log("login Page open");
  };

  let handleCloseLogin = () => {
    setOpenLogin(false);
    console.log("login Page open");
  };

  let page;

  if (open == true) {
    page = <SignUp dialOpen={open} closeFunc={handleClickClose} />;
  } else if (openLogin == true) {
    page = <LoginPage loginOpen={openLogin} loginClose={handleCloseLogin} />;
  } else {
    page = (
      <>
        <NavBar openFun={handleClickOpen} openLoginPage={handleOpenLogin} />
        <FirstMainDiv />
        <SecondDivCards />
        <FindMore />
        <Needs />
        <AboutUs />
      </>
    );
  }

  return <>{page}</>;
};

export default App;
