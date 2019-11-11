import { RECEIVE_ALBUM_AND_SONGS } from '../actions/album_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUM_AND_SONGS:
      const payload = action.payload;
      return Object.assign({}, state, { [payload.album.id]: payload.album });
    case RECEIVE_ARTIST:
      return action.payload.albums;
    default: 
      return state;
  };
};

export default albumsReducer;