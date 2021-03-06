import { RECEIVE_ALBUM_AND_SONGS } from '../actions/album_actions';
import { RECEIVE_PLAYLIST_AND_SONGS, REMOVE_PLAYLIST_AND_SONGS } from '../actions/playlist_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import { RECEIVE_SONGS, TOGGLE_SONG_LIKE } from '../actions/song_actions';
import { UPDATE_SEARCH } from '../actions/search_actions';
import { CLEAR_STATE } from '../actions/other_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { TOGGLE_ALBUM_LIKE } from '../actions/album_actions';


const songsReducer = (state = {}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUM_AND_SONGS:
      return (action.payload.songs) ? action.payload.songs : {};
    case RECEIVE_PLAYLIST_AND_SONGS:
      return (action.payload.songs) ? action.payload.songs : {};
    case RECEIVE_SONGS:
      return action.songs;
    case REMOVE_PLAYLIST_AND_SONGS:
      return {};
    case RECEIVE_ARTIST:
      return action.payload.songs || {};
    case RECEIVE_PLAYLIST: 
      return Object.assign({}, state, action.payload.songs);
    case TOGGLE_SONG_LIKE:
      return Object.assign({}, state, { [action.song.id]: action.song });
    case TOGGLE_ALBUM_LIKE:
      return Object.assign({}, state, action.payload.songs);
    case UPDATE_SEARCH:
      return action.payload.songs || {};
    case CLEAR_STATE:
      return {};
    default:
      return state;
  };
};

export default songsReducer;