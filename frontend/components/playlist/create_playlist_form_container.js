import { connect } from 'react-redux';
import PlaylistForm from './playlist_form';
import { createPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = state => {
  return {
    playlist: { title: '', description: '' },
    formType: 'Create Playlist'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: playlist => dispatch(createPlaylist(playlist))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistForm);