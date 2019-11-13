import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { fetchPlaylists } from '../../../actions/playlist_actions';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    playlists: Object.values(state.entities.playlists),
    currentUserId: state.session.currentUserId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: context => dispatch(fetchPlaylists(context)),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);