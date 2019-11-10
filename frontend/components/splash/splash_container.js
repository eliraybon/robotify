/*
  The Splash component will be drastically overhauled later...
  This version is for testing user auth.
*/

import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import Splash from './splash';

const mapStateToProps = ({session, entities: { users }}) => {
  return {
    currentUser: users[session.currentUserId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
