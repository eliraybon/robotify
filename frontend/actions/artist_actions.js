import * as ArtistApiUtil from '../util/artist_api_util';

export const RECEIVE_ARTIST= "RECEIVE_ARTIST";

const receiveArtist = payload => {
  return {
    type: RECEIVE_ARTIST,
    payload
  };
};

export const fetchArtist = artistId => dispatch => {
  return ArtistApiUtil.fetchArtist(artistId)
    .then(payload => dispatch(receiveArtist(payload)));
};





