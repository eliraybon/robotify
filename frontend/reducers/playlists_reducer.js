import { 
  RECEIVE_PLAYLIST_AND_SONGS, 
  REMOVE_PLAYLIST_AND_SONGS,
  RECEIVE_PLAYLISTS,
  TOGGLE_PLAYLIST_LIKE,
  RECEIVE_PLAYLIST
} from '../actions/playlist_actions';
import { RECEIVE_USER } from '../actions/user_actions';


const playlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  let playlist;
  switch (action.type) {
    case RECEIVE_PLAYLIST_AND_SONGS:
      const payload = action.payload;
      return Object.assign({}, state, { [payload.playlist.id]: payload.playlist });
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, action.playlists);
    case RECEIVE_PLAYLIST:
      playlist = action.payload.playlist;
      return Object.assign({}, state, { [playlist.id]: playlist });
    case TOGGLE_PLAYLIST_LIKE:
      playlist = action.payload.playlist;
      return Object.assign({}, state, { [playlist.id]: playlist });
    case REMOVE_PLAYLIST_AND_SONGS:
      const playlists = Object.assign({}, state);
      delete playlists[action.playlistId]
      return playlists;
    case RECEIVE_USER:
      return Object.assign({}, state, action.payload.playlists);
    default:
      return state;
  };
};

export default playlistsReducer;