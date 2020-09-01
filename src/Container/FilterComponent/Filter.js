import React from "react";
import { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import StateContext from "../Context/StateContext";
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

  const { filterPrice } = useContext(StateContext);
  const { handleFilterChange } = useContext(StateContext);

  return (
    <div className={classes.root}>
      <h3 className={classes.price}>Filter Price</h3>
      <Slider
        className={classes.slider}
        value={filterPrice}
        onChange={handleFilterChange}
        aria-labelledby="continuous-slider"
        color={"black"}
        max={200}
        // min={10}
      />
      <div className={classes.price}>Price: $0- ${filterPrice}</div>
    </div>
  );
}
