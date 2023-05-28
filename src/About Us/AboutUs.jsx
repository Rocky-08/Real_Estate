import { Container } from "@material-ui/core";
import React from "react";
import AboutUsInfo from "./AboutUsInfo";
import SocialLinks from "./SocialLinks";

const AboutUs = (prop) => {
  return (
    <>
      <main
        style={{
          paddingTop: "4rem",
        }}
      >
        <Container maxWidth="md">
          <AboutUsInfo check={prop.check} />
          <hr
            style={{
              marginTop: "3rem",
              border: "1px solid",
              borderColor: prop.check ? "white" : "black",
            }}
          />
          <SocialLinks />
        </Container>
      </main>
    </>
  );
};

export default AboutUs;
