import React from 'react';
import classes from './SectionFive.module.css';
import LogoVue from '../../assets/Logos/Vue.png'
import LogoJs from '../../assets/Logos/Js.png';
import LogoReact from '../../assets/Logos/React.png';
import LogoHTML5 from'../../assets/Logos/HTML5.png';
import LogoCSS3 from'../../assets/Logos/CSS3.png';
import LogoSass from'../../assets/Logos/Sass.png';
import LogoGit from'../../assets/Logos/Git.png';
import LogoGitHub from'../../assets/Logos/GitHub.png';
import LogoVite from'../../assets/Logos/Vite.svg';
import LogoNpm from'../../assets/Logos/npm.png';
import LogoGitLab from'../../assets/Logos/GitLab.png';
import LogoTailwindCSS from'../../assets/Logos/TailwindCSS.png';
import LogoMui from'../../assets/Logos/Mui.svg';
import LogoBootstrap from'../../assets/Logos/Bootstrap.png';
import LogojQuery from'../../assets/Logos/jQuery.png';
import LogoPostman from'../../assets/Logos/Postman.png';
import LogoTs from'../../assets/Logos/Ts.png';
import LogoFigma from'../../assets/Logos/Figma.png';
import LogoJira from'../../assets/Logos/Jira.png';
import LogoWebflow from'../../assets/Logos/Webflow.png';

function SectionParallax() {

  const logos = [
    {value: LogoVue},
    {value: LogoJs},
    {value: LogoReact},
    {value: LogoHTML5},
    {value: LogoCSS3},
    {value: LogoSass},
    {value: LogoGit},
    {value: LogoGitHub},
    {value: LogoVite},
    {value: LogoNpm},
    {value: LogoGitLab},
    {value: LogoTailwindCSS},
    {value: LogoMui},
    {value: LogoBootstrap},
    {value: LogojQuery},
    {value: LogoPostman},
    {value: LogoTs},
    {value: LogoFigma},
    {value: LogoJira},
    {value: LogoWebflow}
  ];

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        {logos.map((logo) => {
          return <img className={classes.img} src={logo.value} alt="Vue" />
        })}
      </div>
    </div>
  )
}

export default SectionParallax;
