import { connect } from 'react-redux';
import LibraryArtists from './library_artists';
import { fetchArtists } from '../../actions/artist_actions';

const mapStateToProps = state => {
  return {
    artists: Object.values(state.entities.artists)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtists: context => dispatch(fetchArtists(context))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LibraryArtists);

