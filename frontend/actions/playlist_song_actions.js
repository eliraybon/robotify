import * as PlaylistSongApiUtil from '../util/playlist_song_api_util';
import { receivePlaylist } from './playlist_actions';


export const addSongToPlaylist = playlistSong => dispatch => {
  return PlaylistSongApiUtil.addSongToPlaylist(playlistSong)
    .then(payload => dispatch(receivePlaylist(payload)));
};

export const removeSongFromPlaylist = (songId, playlistId) => dispatch => {
  return PlaylistSongApiUtil.deleteSongFromPlaylist(songId, playlistId)
    .then(payload => dispatch(receivePlaylist(payload)));
};