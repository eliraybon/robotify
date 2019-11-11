import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, demoLogin } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.sessionErrors,
    formType: 'Log In',
    navLink: <Link to="/signup" className="signup-link">Sign Up For Robotify</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: formUser => dispatch(login(formUser)),
    demoLogin: () => dispatch(demoLogin())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);


