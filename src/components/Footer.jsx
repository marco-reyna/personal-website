import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Marco Reyna ⓒ {year}</p>
    </footer>
  );
}

export default Footer; 