import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.sessionErrors,
    formType: 'Sign Up',
    navLink: <Link to="/login" className="login-link">Log In</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: formUser => dispatch(signup(formUser))
  };
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SignupForm);


