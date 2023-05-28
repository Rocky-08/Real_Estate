import React, { useState } from "react";
import SignUp from "./SignUp/SignUp";
import LoginPage from "./Login/LoginPage";
import SuccessMessage from "./Login/SuccessMessage";
import MainPage from "./MainPage";
import FilterFeature from "./Display cards/FilterFeature";
import NavBar from "./Navbar/NavBar";
import ResetPassword from "./Reset Password/ResetPassword";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  const [showMain, setShowMain] = useState(true);

  const [open, setOpen] = useState(false);

  const [openLogin, setOpenLogin] = useState(false);

  const [alert, setAlert] = useState(null);

  const [clickCard, setClickCard] = useState(false);

  const [filter, setFilter] = useState(false);

  const [resetPassword, setResetPassword] = useState(false);

  const [darkMode, setDarkmode] = useState(false);

  const darkTheme = createTheme({
    palette: { mode: darkMode ? "dark" : "light" },
  });

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

  let openReset = () => {
    setResetPassword(true);
    setShowMain(false);
    setOpenLogin(false);
  };

  let handleReset = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get("email"),
      password: data.get("password"),
      newPass: data.get("confirmPassword"),
    });

    setShowMain(true);
    setResetPassword(false);
  };

  let handleDark = () => {
    setDarkmode(!darkMode);
    console.log(darkMode);
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <SuccessMessage alert={alert} />
        {showMain && (
          <MainPage
            openFun={handleClickOpen}
            openLoginPage={handleOpenLogin}
            openCard={handleCard}
            handledark={handleDark}
            check={darkMode}
          />
        )}
        <SignUp dialOpen={open} closeFunc={handleClickClose} />
        {openLogin && (
          <LoginPage
            loginOpen={openLogin}
            displayAlert={showAlert}
            submitHandle={handleSubmit}
            handlereset={openReset}
          />
        )}
        {clickCard && (
          <>
            <NavBar check={darkMode} handledark={handleDark} />
            <FilterFeature
              openFilterBox={handleFilter}
              filter={filter}
              check={darkMode}
            />
          </>
        )}

        {resetPassword && (
          <>
            <ResetPassword resetFunction={handleReset} />
          </>
        )}
      </ThemeProvider>
    </>
  );
};

export default App;
