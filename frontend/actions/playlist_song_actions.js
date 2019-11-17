/* you may not need this file. The API Util functions should be enough because
  you don't want to do anything once the song is added. 99% of the time, you
  won't be adding a song to a playlist from the same playlist, so you don't need
  the redux state to update. That AJAX request can complete in the background
  and the next time you navigate to the playlist you added the song to it will be
  there. However, if you dispatch receivePlaylistAndSongs... You will replace the
  playlist and song slices of state with the playlist you added the songs to, and 
  that would break the page you're on, since it would most likely be utilizing that
  data. For the edge case of adding a song to a playlist from the same playlist, 
  just don't allow it haha. 
*/

import * as PlaylistSongApiUtil from '../util/playlist_song_api_util';
import { receivePlaylistAndSongs } from './playlist_actions';

export const RECEIVE_PLAYLIST_SONG = "RECEIVE_PLAYLIST_SONG";
export const REMOVE_PLAYLIST_SONG = "REMOVE_PLAYLIST_SONG";

const receivePlaylistSong = playlistSong => {
  return {
    type: RECEIVE_PLAYLIST_SONG,
    playlistSong
  };
};

const removePlaylistSong = playlistSongId => {
  return {
    type: REMOVE_PLAYLIST_SONG,
    playlistSongId
  };
};

//do I even need these actions?

//on second thought... do i even need this whole file?

export const addSongToPlaylist = playlistSong => dispatch => {
  return PlaylistSongApiUtil.addSongToPlaylist(playlistSong)
    .then(payload => dispatch(receivePlaylistAndSongs(payload)));
};

export const removeSongFromPlaylist = playlistSongId => dispatch => {
  return PlaylistSongApiUtil.deleteSongFromPlaylist(playlistSongId)
}