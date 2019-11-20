import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, TOGGLE_USER_FOLLOW } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let user;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, 
        { [action.currentUser.id]: action.currentUser 
      });
    case RECEIVE_USER:
      user = action.payload;
      return Object.assign({}, state, { [user.id]: user });
    case TOGGLE_USER_FOLLOW:
      user = action.payload.user;
      return Object.assign({}, state, { [user.id]: user });
    default:
      return state;
  };
};

export default usersReducer;
