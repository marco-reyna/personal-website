import React from 'react';
import classes from './SideBar.module.css';

function SideBar(props) {

  return (
    <div className={`${classes.container} ${props.scrolling > 2 ? classes.show : classes.hide}`}>
      <div>
        <a href="#section-1">
          top
        </a>
      </div>
      <div>
        <a href="#section-3">
          intro
        </a>
      </div>
      <div>
        <a href="#section-4">
          skills
        </a>
      </div>
      <div>
        <a href="#section-6">
          about me
        </a>
      </div>
      <div>
        <a href="#section-contact">
          contact
        </a>
      </div>
    </div>
  )
}

export default SideBar;
