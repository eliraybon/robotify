import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const TOGGLE_USER_FOLLOW = "TOGGLE_USER_FOLLOW";

const receiveUser = payload => {
  return {
    type: RECEIVE_USER,
    payload
  };
};

const toggleUserFollow = payload => {
  return {
    type: TOGGLE_USER_FOLLOW,
    payload
  };
};

export const fetchUser = userId => dispatch => {
  return UserApiUtil.fetchUser(userId)
    .then(payload => dispatch(receiveUser(payload)));
};

export const followUser = userId => dispatch => {
  return UserApiUtil.followUser(userId)
    .then(user => dispatch(toggleUserFollow(user)));
};

export const unfollowUser = userId => dispatch => {
  return UserApiUtil.unfollowUser(userId)
    .then(user => dispatch(toggleUserFollow(user)));
};