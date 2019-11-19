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
            <Link to="/signup" className="nav-link">Sign Up</Link>
            <Link to="/login" className="nav-link">Login</Link>
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

        <footer className="home-page-footer">
          <img
            src="https://robotify-development.s3.amazonaws.com/bots-balloons-pattern-cmyk.png"
            width="100px"
            height="100px"
          />
        </footer>
      </div>
    )
  };

  const welcomeMessage = () => {
    return (
      // <Redirect to="/explore"/>

      <section>
        <p>Hello, {currentUser.email} </p>
        <button onClick={logout}>Logout</button>
      </section>
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