import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

import CloseButton from "./CloseButton";
import SignUpHeading from "./SignUpHeading";
import SignUpCard from "./SignUpCard";
import LogInHeading from "./LogInHeading";

const SignUp = (prop) => {
  return (
    <>
      <div>
        <Dialog open={prop.dialOpen} onClose={prop.closeFunc}>
          <DialogTitle>
            <CloseButton closeFunction={prop.closeFunc} />
            <SignUpHeading />
          </DialogTitle>

          <DialogContent>
            <DialogContentText>
              <SignUpCard />
            </DialogContentText>
            <LogInHeading />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default SignUp;
