import React from 'react';
import classes from './SectionSix.module.css';
import { useInView } from 'react-intersection-observer';

function SectionSix() {
  const { ref, inView } = useInView({
    threshold: .3,
  });

  return (
    <section className={classes.container} id="section-6">
      <div className={`${classes.hide} ${inView ? classes.show : ''}`} ref={ref}>
        <div className={classes.box}>
          <div className={classes.title}>
            Let's talk
            <span> a little bit </span>
            <span>about me</span> 
          </div>
          <p>
            Having lived in different countries with very different cultures,
            plus my journey through the marketing and publicity world,
            I’m sure I can add a valuable point of view to the projects I’ll work on.
          </p>

          <p>
            I’ve got versatile experience from working in well established corporate
            companies as well as in fast-paced start-up environments as Frontend Developer (Full-Remote and hybrid).
          </p>
      
          <p>
            On the social side, I’ll be quick to integrate into a new team,
            making sure that everyone feels supported and starts
            their day with a smile (if I can help it). 
          </p>

          <p>
            I see myself in the future developing a great professional path
            amongst super talented people. Getting knowledge about
            backend development is on my To-Do list.
          </p>
        </div>
        <div className={classes.box}>
          <div className={classes.title2}>
            And when I'm not
            <span>
              <div className={classes.tooltipContainer} style={{margin: '0 1.5rem'}}>
                <div className={classes.tooltipTrigger}>👨‍💻</div>
                <div className={`${classes.tooltip} ${classes.programming}`}>Programming</div>
              </div>
            </span> I'm:
          </div>
          <div className={classes.hobbies}>
            <div className={classes.tooltipContainer}>
              <div className={classes.tooltipTrigger}>🎹</div>
              <div className={`${classes.tooltip} ${classes.producing}`}>Producing music</div>
            </div>
            <div className={classes.tooltipContainer}>
              <div className={classes.tooltipTrigger}>🎧</div>
              <div className={`${classes.tooltip} ${classes.djing}`}>DJing</div>
            </div>
            <div className={classes.tooltipContainer}>
              <div className={classes.tooltipTrigger}>🤼‍♂️</div>
              <div className={`${classes.tooltip} ${classes.jiuJitsu}`}>Training Jiu-Jitsu</div>
            </div>
            <div className={classes.tooltipContainer}>
              <div className={classes.tooltipTrigger}>🏂</div>
              <div className={`${classes.tooltip} ${classes.snowboarding}`}>Snowboarding</div>
            </div>
            <div className={classes.tooltipContainer}>
              <div className={classes.tooltipTrigger}>⛵</div>
              <div className={`${classes.tooltip} ${classes.sailing}`}>Sailing</div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  )
}

export default SectionSix;
