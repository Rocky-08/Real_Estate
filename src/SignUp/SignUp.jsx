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

const SignUp = (props) => {
  return (
    <>
      <div>
        <Dialog open={props.dialOpen} onClose={props.closeFunc}>
          <DialogTitle>
            <CloseButton closeFunction={props.closeFunc} />
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
