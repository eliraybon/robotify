import React from 'react';
import { connect } from 'react-redux';
import { 
  addToQueue, 
  updateCurrentSong,
  togglePlay 
} from '../../actions/music_actions';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  play() {
    const { songs } = this.props;
    if (!songs.length) return;
    this.props.updateCurrentSong(songs[0]);
    this.props.addToQueue(songs.slice(1));
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
    playing: state.music.playing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToQueue: songs => dispatch(addToQueue(songs)),
    updateCurrentSong: song => dispatch(updateCurrentSong(song)),
    togglePlay: play => dispatch(togglePlay(play))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);