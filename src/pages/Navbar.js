import React from 'react';
import './Style.css';

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-title">
      <h1>Math Magicians</h1>
    </div>
    <div className="navbar-links">
      <a className="links" href="/">Home</a>
      <a className="links" href="/calculator">Calculator</a>
      <a className="links" href="/quotes">Quotes</a>
    </div>
  </div>
);

export default Navbar;
