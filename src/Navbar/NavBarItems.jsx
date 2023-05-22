import React, { useState } from "react";

import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Tabs,
  Button,
  Tab,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import DrawerComp from "./DrawerComp";
import { HomeWorkOutlined } from "@material-ui/icons";

const Pages = ["Home", "About Us", "Contact Us", "Policy"];
const NavBarItems = () => {
  const [value, setValue] = useState();

  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <CssBaseline />
      <AppBar position="relative" style={{ backgroundColor: "White" }}>
        <Toolbar>
          <HomeWorkOutlined style={{ color: "orange" }} />
          <Typography variant="h6" style={{ color: "black" }}>
            Pg Seekers
          </Typography>

          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                style={{ marginLeft: "auto", color: "black" }}
                value={value}
                onChange={(e, value) => {
                  setValue(value);
                }}
                indicateColor="secondary"
              >
                {Pages.map((page, index) => (
                  <Tab
                    remove
                    sx={{ p: 3 }}
                    value={index}
                    style={{ padding: "0px" }}
                    label={page}
                  />
                ))}
              </Tabs>

              <Button
                variant="h6"
                color="secondary"
                style={{
                  marginLeft: "auto",
                  color: "white",
                  backgroundColor: "#388e3c",
                  borderRadius: "2rem",
                }}
              >
                Sign up
              </Button>
              <Button
                variant="h6"
                style={{
                  backgroundColor: "#e53935",
                  color: "white",
                  borderRadius: "2rem",
                  marginLeft: "10px",
                }}
              >
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBarItems;
