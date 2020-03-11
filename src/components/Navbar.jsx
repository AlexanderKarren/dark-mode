import React, { useState } from 'react';

const Navbar = ({setDarkMode, status}) => {

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={() => setDarkMode(status)}
          className={status ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
