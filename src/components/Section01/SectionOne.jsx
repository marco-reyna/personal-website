import React from 'react';
import classes from './SectionOne.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Zoom from '@mui/material/Zoom';

function SectionOne() {

  return (
    <div className={classes.container} id="section-1">
      <div className={classes.nameBox}>
        <div className={classes.firstName}>Marco</div>
        <div className={classes.lastName}>Reyna</div>
        <div className={classes.position}>Frontend Developer</div>
      </div>
      <div className={classes.icon}>
        <Zoom in={true}>
          <KeyboardArrowDownIcon/>
        </Zoom>
      </div>
    </div>
  )
}

export default SectionOne;
