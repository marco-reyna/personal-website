import React from "react";
import classes from "./SectionOne.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Zoom from "@mui/material/Zoom";
import { useInView } from "react-intersection-observer";

function SectionOne(props) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section className={classes.container} id="section-1">
      <div
        className={`${classes.nameBox} ${inView ? classes.showNameBox : ""}`}
        ref={ref}
      >
        <div>Hi, I'm</div>
        <div className={classes.firstName}>Marco</div>
        <div className={classes.lastName}>Reyna</div>
        <div className={classes.position}>Frontend Developer</div>
      </div>
      <div
        className={`${classes.icon} ${
          props.scrolling > 2 ? classes.hideIcon : classes.showIcon
        }`}
      >
        <Zoom in={true}>
          <KeyboardArrowDownIcon />
        </Zoom>
      </div>
    </section>
  );
}

export default SectionOne;
