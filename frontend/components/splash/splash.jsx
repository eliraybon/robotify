/*
  The Splash component will be drastically overhauled later...
  This version is for testing user auth.
*/

import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({currentUser, logout}) => {
  const sessionLinks = () => {
    return (
      <header className="main-header">
        <nav className="main-nav">
          <Link to="/signup" className="nav-link">Sign Up</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </nav>
      </header>
    )
  };

  const welcomeMessage = () => {
    return (
      <section>
        <p>Hello, { currentUser.email} </p>
        <button onClick={ logout }>Logout</button>
      </section>
    )
  };

  return currentUser? welcomeMessage() : sessionLinks();
};

export default Splash;