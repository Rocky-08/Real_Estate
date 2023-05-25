import React, { useState } from "react";
import SignUp from "./SignUp/SignUp";
import LoginPage from "./Login/LoginPage";
import SuccessMessage from "./Login/SuccessMessage";
import MainPage from "./MainPage";
import FilterFeature from "./Display cards/FilterFeature";
import NavBar from "./Navbar/NavBar";

const App = () => {
  const [showMain, setShowMain] = useState(true);

  const [open, setOpen] = useState(false);

  const [openLogin, setOpenLogin] = useState(false);

  const [alert, setAlert] = useState(null);

  const [clickCard, setClickCard] = useState(false);

  const [filter, setFilter] = useState(false);

  let handleFilter = () => {
    setFilter(!filter);
  };

  let handleCard = () => {
    setClickCard(true);
    setShowMain(false);
    console.log("card click hogya");
  };

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };

  let handleClickOpen = () => {
    setOpen(true);
    setShowMain(false);
    console.log("open hogya");
  };

  let handleClickClose = () => {
    setOpen(false);
    setShowMain(true);
    console.log("close hogya");
  };

  let handleOpenLogin = () => {
    setOpenLogin(true);
    setShowMain(false);
    console.log("login Page open");
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    showAlert("You are Successfully Logged In 😊😊", "success");
    setShowMain(true);
    setOpenLogin(false);
  };

  return (
    <>
      <SuccessMessage alert={alert} />
      {showMain && (
        <MainPage
          openFun={handleClickOpen}
          openLoginPage={handleOpenLogin}
          openCard={handleCard}
        />
      )}
      <SignUp dialOpen={open} closeFunc={handleClickClose} />
      {openLogin && (
        <LoginPage
          loginOpen={openLogin}
          displayAlert={showAlert}
          submitHandle={handleSubmit}
        />
      )}
      {clickCard && (
        <>
          <NavBar />{" "}
          <FilterFeature openFilterBox={handleFilter} filter={filter} />
        </>
      )}
    </>
  );
};

export default App;
