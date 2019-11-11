import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALBUM_AND_SONGS = "RECEIVE_ALBUM_AND_SONGS";

const receiveAlbumAndSongs = payload => {
  return {
    type: RECEIVE_ALBUM_AND_SONGS,
    payload
  };
};

export const fetchAlbum = albumId => dispatch => {
  return AlbumApiUtil.fetchAlbum(albumId)
    .then(payload => dispatch(receiveAlbumAndSongs(payload)));
};

