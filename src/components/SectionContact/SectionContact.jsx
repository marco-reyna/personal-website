import React from "react";
import classes from "./SectionContact.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Cv from "../../assets/CV_Marco_Reyna-Frontend_Developer.pdf";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useInView } from "react-intersection-observer";

function SectionContact() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <section className={classes.container} id="section-contact">
      <div
        className={`${classes.box} ${inView ? classes.showBox : ""}`}
        ref={ref}
      >
        <p className={classes.text}>Get in touch</p>
        <div>
          <a
            href="https://www.linkedin.com/in/marcoreynarinaldi/"
            target="_blank"
            className={classes.icon}
          >
            <LinkedInIcon sx={{ fontSize: "10vh" }} />
          </a>
          <a href="mailto:marcoreynarinaldi@gmail.com" className={classes.icon}>
            <EmailIcon sx={{ fontSize: "10vh" }} />
          </a>
          <a
            href="https://github.com/marco-reyna"
            target="_blank"
            className={classes.icon}
          >
            <GitHubIcon sx={{ fontSize: "10vh" }} />
          </a>
        </div>
        <a className={classes.btn} href={Cv} target="_blank">
          Resume &#62;
        </a>
      </div>
    </section>
  );
}

export default SectionContact;
