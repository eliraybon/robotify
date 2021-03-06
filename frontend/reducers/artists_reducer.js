import { 
  RECEIVE_ARTIST, 
  RECEIVE_ARTISTS,
  TOGGLE_FOLLOW
} from '../actions/artist_actions';
import { UPDATE_SEARCH } from '../actions/search_actions';
import { CLEAR_STATE } from '../actions/other_actions';


const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTIST:
      const payload = action.payload;
      return { [payload.artist.id]: payload.artist };
    case RECEIVE_ARTISTS:
      return action.artists;
    case TOGGLE_FOLLOW:
      const artist = action.payload.artist;
      return Object.assign({}, state, { [artist.id]: artist });
    case UPDATE_SEARCH:
      return action.payload.artists || {};
    case CLEAR_STATE:
      return {};
    default:
      return state;
  };
};

export default artistsReducer;