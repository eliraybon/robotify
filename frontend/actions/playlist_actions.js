import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLIST_AND_SONGS = "RECEIVE_PLAYLIST_AND_SONGS";

const receivePlaylistAndSongs = payload => {
  return {
    type: RECEIVE_PLAYLIST_AND_SONGS,
    payload
  };
};

export const fetchPlaylist = playlistId => dispatch => {
  return PlaylistApiUtil.fetchPlaylist(playlistId)
    .then(payload => dispatch(receivePlaylistAndSongs(payload)));
};

