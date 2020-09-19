import React from "react";
import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Slider from "@material-ui/core/Slider";
import StateContext from "../Context/StateContext";

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

export default function ContinuousSlider() {
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
