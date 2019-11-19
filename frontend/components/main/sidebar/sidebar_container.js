import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { fetchPlaylists } from '../../../actions/playlist_actions';
import { openModal } from '../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar));
