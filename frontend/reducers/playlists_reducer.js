import { RECEIVE_PLAYLIST_AND_SONGS } from '../actions/playlist_actions';

const playlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLIST_AND_SONGS:
      const payload = action.payload;
      return Object.assign({}, state, { [payload.playlist.id]: payload.playlist });
    default:
      return state;
  };
};

export default playlistsReducer;