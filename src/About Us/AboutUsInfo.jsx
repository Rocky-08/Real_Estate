import { Grid, Link } from "@material-ui/core";
import React from "react";

let infoItems = ["About", "Carrers", "Terms & Conditions", "Privacy Policy"];
const AboutUsInfo = () => {
  return (
    <>
      <Grid container spacing={1} justifyContent="center">
        {infoItems.map((info) => (
          <Grid align="center" item md={3} lg={3} sm={3}>
            <Link
              variant="body1"
              component="button"
              style={{
                color: "black",
                padding: "0.3rem",
                fontWeight: "bold",
              }}
            >
              {info}
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AboutUsInfo;
