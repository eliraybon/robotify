import { connect } from 'react-redux';
import MusicPlayer from './music_player';
import { 
  updateCurrentSong, 
  updateQueue, 
  togglePlay 
} from '../../../actions/music_actions';

const mapStateToProps = ({ music }) => {
  return {
    currentSong: music.currentSong,
    playing: music.playing,
    queue: music.queue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCurrentSong: song => dispatch(updateCurrentSong(song)),
    updateQueue: queue => dispatch(updateQueue(queue)),
    togglePlay: play => dispatch(togglePlay(play))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicPlayer);