import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { 
  fetchPlaylist,
  deletePlaylist,
  likePlaylist,
  unlikePlaylist 
} from '../../actions/playlist_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const playlistId = parseInt(ownProps.match.params.playlistId);

  return {
    playlistId, 
    playlist: state.entities.playlists[playlistId],
    songs: Object.values(state.entities.songs),
    currentUserId: state.session.currentUserId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
    deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId)),
    likePlaylist: playlistId => dispatch(likePlaylist(playlistId)),
    unlikePlaylist: playlistId => dispatch(unlikePlaylist(playlistId)),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShow);