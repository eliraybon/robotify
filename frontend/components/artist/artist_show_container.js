import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { 
  fetchArtist,
  followArtist, 
  unfollowArtist
 } from '../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => {
  const artistId = parseInt(ownProps.match.params.artistId);
  return {
    artistId,
    artist: state.entities.artists[artistId],
    albums: Object.values(state.entities.albums),
    songs: Object.values(state.entities.songs)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: artistId => dispatch(fetchArtist(artistId)),
    followArtist: artistId => dispatch(followArtist(artistId)),
    unfollowArtist: artistId => dispatch(unfollowArtist(artistId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistShow);