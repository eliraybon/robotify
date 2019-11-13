import { connect } from 'react-redux';
import PlaylistForm from './playlist_form';
import { createPlaylist } from '../../actions/playlist_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    playlist: { title: '', description: '' },
    formType: 'Create'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: playlist => dispatch(createPlaylist(playlist)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistForm));