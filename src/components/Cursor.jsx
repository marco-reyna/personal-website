import React, { useState, useEffect } from "react";
import classes from "./Cursor.module.css";

function Cursor() {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const [cursorOver, setCursorOver] = useState(false);
  useEffect(() => {
    window.addEventListener("mousemove", function (e) {
      setTop(e.pageY);
      setLeft(e.pageX);
    });
    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("mouseleave", () => {
        setCursorOver(false);
      });
      link.addEventListener("mouseover", () => {
        setCursorOver(true);
      });
    });
  }, []);

  return (
    <>
      <div
        className={`${classes.cursor} ${cursorOver ? classes.cursorGrow : ""}`}
        style={{ left: `${left}px`, top: `${top}px` }}
      />
    </>
  );
}

export default Cursor;
