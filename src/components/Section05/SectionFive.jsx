import React from 'react';
import classes from './SectionFive.module.css';
import LogoVue from '../../assets/LogosWY/Vue.png'
import LogoJs from '../../assets/LogosWY/Js.png';
import LogoReact from '../../assets/LogosWY/React.png';
import LogoHTML5 from'../../assets/LogosWY/HTML5.png';
import LogoCSS3 from'../../assets/LogosWY/CSS3.png';
import LogoSass from'../../assets/LogosWY/Sass.png';
import LogoGit from'../../assets/LogosWY/Git.png';
import LogoGitHub from'../../assets/LogosWY/GitHub.png';
import LogoVite from'../../assets/LogosWY/Vite.png';
import LogoNpm from'../../assets/LogosWY/npm.png';
import LogoGitLab from'../../assets/LogosWY/GitLab.png';
import LogoTailwindCSS from'../../assets/LogosWY/TailwindCSS.png';
import LogoMui from'../../assets/LogosWY/Mui.png';
import LogoBootstrap from'../../assets/LogosWY/Bootstrap.png';
import LogojQuery from'../../assets/LogosWY/jQuery.png';
import LogoPostman from'../../assets/LogosWY/Postman.png';
import LogoTs from'../../assets/LogosWY/Ts.png';
import LogoFigma from'../../assets/LogosWY/Figma.png';
import LogoJira from'../../assets/LogosWY/Jira.png';
import LogoWebflow from'../../assets/LogosWY/Webflow.png';
import { useInView } from 'react-intersection-observer';

function SectionFive() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const logos = [
    {value: LogoVue},
    {value: LogoJs},
    {value: LogoReact},
    {value: LogoHTML5},
    {value: LogoCSS3},
    {value: LogoSass},
    {value: LogoGit},
    {value: LogoVite},
    {value: LogoGitHub},
    {value: LogoNpm},
    {value: LogoGitLab},
    {value: LogoTailwindCSS},
    {value: LogoMui},
    {value: LogoBootstrap},
    {value: LogojQuery},
    {value: LogoPostman},
    {value: LogoJira},
    {value: LogoTs},
    {value: LogoWebflow},
    {value: LogoFigma},
  ];

  return (
    <section className={classes.container}>
      <div className={`${classes.box} ${inView ? classes.show : ''}`} ref={ref}>
        {logos.map((logo) => {
          return <img 
            className={classes.img}
            ref={ref}
            src={logo.value}
            key={logo.value}
          />
        })}
      </div>
    </section>
  )
}

export default SectionFive;
