import React from "react";
import classes from "./SectionThree.module.css";
import Cv from "../../assets/CV_Marco_Reyna-Frontend_Developer.pdf";
import { useInView } from "react-intersection-observer";

function SectionThree() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section className={classes.container} id="section-3">
      <div
        className={`${classes.hide} ${inView ? classes.show : ""}`}
        ref={ref}
      >
        <div className={classes.box}>
          <div>
            <p className={`${classes.text} ${classes.right}`}>
              After several years of working in advertising, in 2019 I
              transitioned to software development (Frontend).
            </p>
          </div>
          <div>
            <p className={classes.text}>
              I've worked with
              <span>
                {" "}
                Vue and common Frontend stack for 3 years. Some months ago I
                focused more on React and I am currently learning Python{" "}
              </span>
              As I want to deepen my knowledge in backend to become a Full Stack
              Developer.
            </p>
          </div>
        </div>
        <a className={classes.btn} href={Cv} target="_blank">
          Resume &#62;
        </a>
      </div>
    </section>
  );
}

export default SectionThree;
