import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALBUM_AND_SONGS = "RECEIVE_ALBUM_AND_SONGS";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";

const receiveAlbumAndSongs = payload => {
  return {
    type: RECEIVE_ALBUM_AND_SONGS,
    payload
  };
};

const receiveAlbums = albums => {
  return {
    type: RECEIVE_ALBUMS,
    albums
  };
};

export const fetchAlbum = albumId => dispatch => {
  return AlbumApiUtil.fetchAlbum(albumId)
    .then(payload => dispatch(receiveAlbumAndSongs(payload)));
};

export const fetchAlbums = context => dispatch => {
  return AlbumApiUtil.fetchAlbums(context)
    .then(albums => dispatch(receiveAlbums(albums)));
};



