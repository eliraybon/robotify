import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/session_actions';

const Splash = ({currentUser, logout, demoLogin}) => {
  const sessionLinks = () => {
    const demoUser = { email: 'demo-user@robotify.com', password: 'robotifyrocks' };

    return (
      <div className="home-page">
        <header className="main-header">
          <nav className="main-nav">
            <Link to="/">
            <div className="splash-main-logo">
              <img
                src="https://robotify-development.s3.amazonaws.com/robotify-white-edit.png"
                width="50"
                height="50"
              />
              <span className="splash-logo-text">Robotify</span>
            </div>
            </Link>
            <div>
              <Link to="/signup" className="nav-link">Sign Up</Link>
              <Link to="/login" className="nav-link">Login</Link>
            </div>
          </nav>
        </header>

        <main className="home-page-main">
          <h1 className="home-page-header">Music for the Future.</h1>

          <button 
            className="session-button"
            onClick={() => demoLogin(demoUser)}
          >
            Log In as Demo User
          </button>
        </main>
      </div>
    )
  };

  const welcomeMessage = () => {
    return (
      <Redirect to="/explore"/>
    )
  };

  return currentUser? welcomeMessage() : sessionLinks();
};


const mapDispatchToProps = dispatch => {
  return {
    demoLogin: demoUser => dispatch(login(demoUser))
  }
}

export default connect(
  null, 
  mapDispatchToProps
)(Splash);

// export default Splash;