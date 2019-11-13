import { connect } from 'react-redux';
import PlaylistIndex from './playlist_index';
import { fetchPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = state => {
  return {
    playlists: Object.values(state.entities.playlists)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: context => dispatch(fetchPlaylists(context))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistIndex);
