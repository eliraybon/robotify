import { RECEIVE_ARTIST } from '../actions/artist_actions';

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTIST:
      const payload = action.payload;
      return { [payload.artist.id]: payload.artist };
    default:
      return state;
  };
};

export default artistsReducer;