import React, { useState } from "react";
import LoginHeading from "./Heading";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import LoginForm from "./LoginForm";

const LoginPage = (prop) => {
  return (
    <>
      <Container component="main" maxWidth="xs" style={{ marginTop: "3rem" }}>
        <Box
          style={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LoginHeading />
          <LoginForm
            submitFunc={prop.submitHandle}
            loginClose={prop.loginClose}
            handlereset={prop.handlereset}
          />
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;
