import React from 'react';
import classes from './SectionFour.module.css';

function SectionFour() {

  return (
    <section className={classes.container} id="section-4">
      <div className={classes.box}>
        <div className={classes.text1}>
          <span>Let's talk about</span>
          <div className={classes.keywords}>
            <div>Skills</div>
            <div>Stack</div>
            <div>Tools</div>
          </div>
        </div>
      </div>
      <div className={classes.box}>
        <div className={classes.text}>
          <p className={classes.text2}>
            I am constantly learning new things and improving my skills.
            <span>Find the entire list floating below.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SectionFour;
