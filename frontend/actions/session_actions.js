import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

const receiveSessionErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const signup = formUser => dispatch => {
  return SessionApiUtil.signup(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};

export const login = formUser => dispatch => {
  return SessionApiUtil.login(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then(
    user => dispatch(logoutCurrentUser()),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};




