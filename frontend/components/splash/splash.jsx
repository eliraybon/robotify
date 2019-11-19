/*
  The Splash component will be drastically overhauled later...
  This version is for testing user auth.
*/

import React from 'react';
import { Link, Redirect } from 'react-router-dom';

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
      <Redirect to="/explore"/>
    )
  };

  return currentUser? welcomeMessage() : sessionLinks();
};

export default Splash;