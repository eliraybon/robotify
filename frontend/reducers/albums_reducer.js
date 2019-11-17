import { 
  RECEIVE_ALBUM_AND_SONGS, 
  RECEIVE_ALBUMS 
} from '../actions/album_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import { TOGGLE_ALBUM_LIKE } from '../actions/album_actions';
import { UPDATE_SEARCH } from '../actions/search_actions';
import { CLEAR_STATE } from '../actions/other_actions';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUM_AND_SONGS:
      const payload = action.payload;
      return Object.assign({}, state, { [payload.album.id]: payload.album });
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ARTIST:
      return action.payload.albums;
    case TOGGLE_ALBUM_LIKE:
      return Object.assign({}, state, { [action.payload.album.id]: action.payload.album });
    case UPDATE_SEARCH:
      return action.payload.albums || {};
    case CLEAR_STATE:
      return {};
    default: 
      return state;
  };
};

export default albumsReducer;