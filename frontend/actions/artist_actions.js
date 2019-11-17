import * as ArtistApiUtil from '../util/artist_api_util';

export const RECEIVE_ARTIST= "RECEIVE_ARTIST";
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";

const receiveArtist = payload => {
  return {
    type: RECEIVE_ARTIST,
    payload
  };
};

const receiveArtists = artists => {
  return {
    type: RECEIVE_ARTISTS,
    artists
  };
};

const toggleFollow = payload => {
  return {
    type: TOGGLE_FOLLOW,
    payload
  };
};

export const fetchArtist = artistId => dispatch => {
  return ArtistApiUtil.fetchArtist(artistId)
    .then(payload => dispatch(receiveArtist(payload)));
};

export const fetchArtists = context => dispatch => {
  return ArtistApiUtil.fetchArtists(context)
    .then(artists => dispatch(receiveArtists(artists)));
};

export const followArtist = artistId => dispatch => {
  return ArtistApiUtil.followArtist(artistId)
    .then(artist => dispatch(toggleFollow(artist)));
};

export const unfollowArtist = artistId => dispatch => {
  return ArtistApiUtil.unfollowArtist(artistId)
    .then(artist => dispatch(toggleFollow(artist)));
};



