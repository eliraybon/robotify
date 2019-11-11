import { RECEIVE_ALBUM_AND_SONGS } from '../actions/album_actions';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUM_AND_SONGS:
      return Object.assign({}, state, action.payload.songs);
    default:
      return state;
  };
};

export default songsReducer;