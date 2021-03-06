import { connect } from 'react-redux';
import MusicPlayer from './music_player';
import {
  updateCurrentSong,
  updateQueue,
  updateHistory,
  togglePlay
} from '../../../actions/music_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ music, ui }) => {
  return {
    currentSong: music.currentSong,
    playing: music.playing,
    queue: music.queue,
    songHistory: music.songHistory,
    modal: ui.modal.type
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCurrentSong: song => dispatch(updateCurrentSong(song)),
    updateQueue: queue => dispatch(updateQueue(queue)),
    updateSongHistory: history => dispatch(updateHistory(history)),
    togglePlay: play => dispatch(togglePlay(play))
  };
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicPlayer));