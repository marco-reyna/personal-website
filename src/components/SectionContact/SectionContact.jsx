import React from 'react';
import classes from './SectionContact.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function SectionContact() {

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <p className={classes.text}>Get in touch:</p>
        <a href="https://www.linkedin.com/in/marcoreynarinaldi/" className={classes.icon}>
          <LinkedInIcon sx={{ fontSize: "10vh" }}/>
        </a>
        <a href="mailto:marcoreynarinaldi@gmail.com" className={classes.icon}>
          <EmailIcon sx={{ fontSize: "10vh" }}/>
        </a>
      </div>
    </div>
  )
}

export default SectionContact;
