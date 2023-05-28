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

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Buttons from "./Buttons";

const Pages = ["Home", "About Us", "Contact Us", "Policy"];

const NavBarItems = (prop) => {
  const [value, setValue] = useState();

  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar
        position="relative"
        style={{ backgroundColor: prop.check ? "#272727" : "white" }}
      >
        <Toolbar>
          <HomeWorkOutlined style={{ color: "orange" }} />
          <Typography
            variant="h6"
            style={{ color: prop.check ? "white" : "#272727" }}
          >
            StayNearU
          </Typography>

          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                style={{
                  marginLeft: "auto",
                  color: prop.check ? "white" : "#272727",
                }}
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

              <Buttons
                text="Sign Up"
                backColor="#388e3c"
                func={prop.func}
                mrg="auto"
              />
              <Buttons
                text="Login"
                backColor="#e53935"
                func={prop.login}
                mrg="10px"
              />
            </>
          )}

          <Button>
            {prop.check ? (
              <LightModeIcon
                style={{ color: "White" }}
                onClick={prop.handledark}
              />
            ) : (
              <DarkModeIcon
                style={{ color: "black" }}
                onClick={prop.handledark}
              />
            )}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBarItems;
