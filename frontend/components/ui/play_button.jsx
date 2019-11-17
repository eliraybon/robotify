import React from 'react';
import { connect } from 'react-redux';
import { 
  addToQueue, 
  updateQueue,
  updateCurrentSong,
  togglePlay 
} from '../../actions/music_actions';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  queueHelper(songs, queue) {
    const sliceOfQueue = queue.slice(0, songs.length);

    for (let i = 0; i < songs.length; i++) {
      if (songs[i] !== sliceOfQueue[i]) return false; 
    }
    return true;
  }

  play() {
    const { songs, queue } = this.props;
    if (!songs.length) return;
    this.props.updateCurrentSong(songs[0]);
    if (!this.queueHelper(songs, queue)) {
      this.props.updateQueue([...songs.slice(1)]);
    }
    this.props.togglePlay(true);
  }

  pause() {
    this.props.togglePlay(false);
  }

  render() {
    if (this.props.playing) {
      return <div onClick={this.pause} className="play-button">Pause</div>
    } else {
      return <div onClick={this.play} className="play-button">Play</div>
    }
  }
}

const mapStateToProps = state => {
  return {
    songs: Object.values(state.entities.songs),
    playing: state.music.playing,
    queue: state.music.queue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToQueue: songs => dispatch(addToQueue(songs)),
    updateQueue: queue => dispatch(updateQueue(queue)),
    updateCurrentSong: song => dispatch(updateCurrentSong(song)),
    togglePlay: play => dispatch(togglePlay(play))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);