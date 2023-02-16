import React from 'react';
import classes from './SectionThree.module.css';

function SectionThree() {

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div>
          <p className={`${classes.text} ${classes.right}`}>
            After several years of working in advertising,
            in 2019 I transitioned to software development
            (Frontend). 
          </p>
        </div>
        <div>
          <p className={classes.text}>
            I've worked with <span>Vue for 3 years and started using React recently.</span>
            In the future I want to deepen my knowledge in backend
            to become a Full Stack Developer. 
          </p>
        </div>
      </div>
      <button className={classes.btn}>
        See Resume &#62;
      </button>
    </div>
  )
}

export default SectionThree;
