import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const TOGGLE_LIKE = "TOGGLE_LIKE";

const receiveSongs = songs => {
  return {
    type: RECEIVE_SONGS,
    songs
  };
};

const toggleLike = song => {
  return {
    type: TOGGLE_LIKE,
    song
  };
};

export const fetchSongs = context => dispatch => {
  return SongApiUtil.fetchSongs(context)
    .then(songs => dispatch(receiveSongs(songs)));
};

export const likeSong = songId => dispatch => {
  return SongApiUtil.likeSong(songId)
    .then(song => dispatch(toggleLike(song)));
};

export const unlikeSong = songId => dispatch => {
  return SongApiUtil.unlikeSong(songId)
    .then(song => dispatch(toggleLike(song)));
};

