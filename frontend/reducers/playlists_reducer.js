import { 
  RECEIVE_PLAYLIST_AND_SONGS, 
  REMOVE_PLAYLIST_AND_SONGS,
  RECEIVE_PLAYLISTS
} from '../actions/playlist_actions';

const playlistsReducer = (state = {}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLIST_AND_SONGS:
      const payload = action.payload;
      return Object.assign({}, state, { [payload.playlist.id]: payload.playlist });
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, action.playlists);
    case REMOVE_PLAYLIST_AND_SONGS:
      return {};
    default:
      return state;
  };
};

export default playlistsReducer;