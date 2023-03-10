import React from 'react';
import classes from './SectionTwo.module.css';
import { useInView } from 'react-intersection-observer';

function SectionTwo() {
  const { ref, inView } = useInView({
    threshold: .5,
  });

  return (
    <section className={classes.container}>
      <div className={`${classes.box} ${inView ? classes.showBox : ''}`} ref={ref}>
        <p className={`${classes.text} ${classes.right}`}>Hey There, Welcome To My Site.</p>
        <hr className={classes.hr}/>
        <p className={classes.text}>
          I Have Created This Space To Put In Practice My Skills
          And Easily Share My Professional Profile With Recruiters
          And Companies.
        </p>
      </div>
    </section>
  )
}

export default SectionTwo;
