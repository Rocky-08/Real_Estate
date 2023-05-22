import { Container } from "@material-ui/core";
import React from "react";
import AboutUsInfo from "./AboutUsInfo";
import SocialLinks from "./SocialLinks";

const AboutUs = () => {
  return (
    <>
      <main style={{ backgroundColor: "white", paddingTop: "4rem" }}>
        <Container maxWidth="md">
          <AboutUsInfo />
          <hr style={{ marginTop: "3rem", border: "1px solid black" }} />
          <SocialLinks />
        </Container>
      </main>
    </>
  );
};

export default AboutUs;
