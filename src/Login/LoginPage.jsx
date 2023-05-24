import React, { useState } from "react";
import LoginHeading from "./Heading";
import { Box, Container, CssBaseline } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import LoginForm from "./LoginForm";

import App from "../App";

const defaultTheme = createTheme();

let submitDone = false;

const LoginPage = () => {
  let [submit, setSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    setSubmit(true);
  };

  if (submit == true) {
    return (
      <>
        <App />
      </>
    );
  }

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" style={{ marginTop: "3rem" }}>
          <CssBaseline />

          <Box
            style={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LoginHeading />
            <LoginForm submitFunc={handleSubmit} />
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default LoginPage;
export { submitDone };
