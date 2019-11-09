import { 
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER 
} from '../actions/session_actions';

const _nullSession = {
  currentUserId: null
};

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUserId: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default: 
      return state;
  };
};

export default sessionReducer;
