import { 
  RECEIVE_ARTIST, 
  RECEIVE_ARTISTS,
  TOGGLE_FOLLOW
} from '../actions/artist_actions';
import { UPDATE_SEARCH } from '../actions/search_actions';


const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTIST:
      const payload = action.payload;
      return { [payload.artist.id]: payload.artist };
    case RECEIVE_ARTISTS:
      return action.artists;
    case TOGGLE_FOLLOW:
      return Object.assign({}, state, { [action.artist.id]: action.artist });
    case UPDATE_SEARCH:
      return action.payload.artists || {};
    default:
      return state;
  };
};

export default artistsReducer;