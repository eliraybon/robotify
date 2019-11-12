import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLIST_AND_SONGS = "RECEIVE_PLAYLIST_AND_SONGS";
export const REMOVE_PLAYLIST_AND_SONGS = "REMOVE_PLAYLIST_AND_SONGS";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";

export const receivePlaylistAndSongs = payload => {
  return {
    type: RECEIVE_PLAYLIST_AND_SONGS,
    payload
  };
};

const removePlaylistAndSongs = playlistId => {
  return {
    type: REMOVE_PLAYLIST_AND_SONGS
  };
};

const receivePlaylists = playlists => {
  return {
    type: RECEIVE_PLAYLISTS,
    playlists
  };
};

export const fetchPlaylist = playlistId => dispatch => {
  return PlaylistApiUtil.fetchPlaylist(playlistId)
    .then(payload => dispatch(receivePlaylistAndSongs(payload)));
};

export const fetchPlaylists = context => dispatch => {
  return PlaylistApiUtil.fetchPlaylists(context)
    .then(playlists => dispatch(receivePlaylists(playlists)));
};

export const createPlaylist = playlist => dispatch => {
  return PlaylistApiUtil.createPlaylist(playlist)
    .then(payload => dispatch(receivePlaylistAndSongs(payload)));
};

export const updatePlaylist = playlist => dispatch => {
  return PlaylistApiUtil.updatePlaylist(playlist)
    .then(payload => dispatch(receivePlaylistAndSongs(payload)));
};

//does removing a playlist also need to remove all songs from the state
export const deletePlaylist = playlistId => dispatch => {
  return PlaylistApiUtil.deletePlaylist(playlistId)
    .then(() => dispatch(removePlaylistAndSongs(playlistId)));
};

