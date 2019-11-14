import { 
  RECEIVE_ARTIST, 
  RECEIVE_ARTISTS,
  TOGGLE_FOLLOW
} from '../actions/artist_actions';


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
    default:
      return state;
  };
};

export default artistsReducer;