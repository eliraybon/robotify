import { connect } from 'react-redux';
import MusicPlayer from './music_player';

const mapStateToProps = ({ music }) => {
  return {
    currentSong: music.currentSong,
    playing: music.playing,
    queue: music.queue
  };
};


export default connect(
  mapStateToProps
)(MusicPlayer);