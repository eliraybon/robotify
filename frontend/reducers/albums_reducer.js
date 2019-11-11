import { RECEIVE_ALBUM_AND_SONGS } from '../actions/album_actions';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUM_AND_SONGS:
      const payload = action.payload;
      return Object.assign({}, state, { [payload.album.id]: payload.album });
    default: 
      return state;
  };
};

export default albumsReducer;