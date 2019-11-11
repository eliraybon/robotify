import { RECEIVE_ALBUM_AND_SONGS } from '../actions/album_actions';
import { RECEIVE_PLAYLIST_AND_SONGS } from '../actions/playlist_actions';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUM_AND_SONGS:
      // return Object.assign({}, state, action.payload.songs);
      return action.payload.songs;
    case RECEIVE_PLAYLIST_AND_SONGS:
      return action.payload.songs;
    default:
      return state;
  };
};

export default songsReducer;