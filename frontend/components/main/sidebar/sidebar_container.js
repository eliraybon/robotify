import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { fetchPlaylists } from '../../../actions/playlist_actions';
import { openModal } from '../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { fetchSongs } from '../../../actions/song_actions';
import { 
  togglePlay, 
  updateQueue,
  updateCurrentSong 
} from '../../../actions/music_actions';

const mapStateToProps = state => {
  return {
    playlists: Object.values(state.entities.playlists),
    currentUserId: state.session.currentUserId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: context => dispatch(fetchPlaylists(context)),
    openModal: modal => dispatch(openModal(modal)),
    fetchSongs: () => dispatch(fetchSongs('radio')),
    updateCurrentSong: song => dispatch(updateCurrentSong(song)),
    togglePlay: play => dispatch(togglePlay(play)),
    updateQueue: queue => dispatch(updateQueue(queue))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar));
