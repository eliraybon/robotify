import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";

const receiveSongs = songs => {
  return {
    type: RECEIVE_SONGS,
    songs
  };
};

export const fetchSongs = context => dispatch => {
  return SongApiUtil.fetchSongs(context)
    .then(songs => dispatch(receiveSongs(songs)));
};