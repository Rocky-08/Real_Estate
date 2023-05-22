import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "../styles";
import { MoreHorizOutlined } from "@material-ui/icons";
const FirstMainDivContent = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <Typography
          variant="h4"
          className={classes.text}
          color="textSecondary"
          paragraph
        >
          Top Category Rooms
        </Typography>
      </div>
    </>
  );
};

export default FirstMainDivContent;
