import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

// import VolumeDown from "@material-ui/icons/VolumeDown";
// import VolumeUp from "@material-ui/icons/VolumeUp";

const useStyles = makeStyles({
  root: {
    width: 200,
  },
  slider: {
    color: "black",
  },
  price: {
    color: "grey",
  },
});

export default function ContinuousSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 className={classes.price}>Filter Price</h3>
      <Slider
        className={classes.slider}
        value={props.price}
        onChange={props.handleFilterChange}
        aria-labelledby="continuous-slider"
        color={"black"}
      />
      <div className={classes.price}>Price: $0- ${props.price}</div>
    </div>
  );
}
