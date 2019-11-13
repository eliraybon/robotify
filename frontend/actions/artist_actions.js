import * as ArtistApiUtil from '../util/artist_api_util';

export const RECEIVE_ARTIST= "RECEIVE_ARTIST";
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";

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

export const fetchArtist = artistId => dispatch => {
  return ArtistApiUtil.fetchArtist(artistId)
    .then(payload => dispatch(receiveArtist(payload)));
};

export const fetchArtists = context => dispatch => {
  return ArtistApiUtil.fetchArtists(context)
    .then(artists => dispatch(receiveArtists(artists)));
};





