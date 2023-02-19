import React from 'react';
import classes from './SideBar.module.css';

function SideBar() {

  return (
    <div className={classes.container}>
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
          stacks
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
