import React from 'react';

export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = props;
    this.state = {
      currentSong: props.currentSong,
      playing: props.playing,
      queue: props.queue
    }

    this.songHistory = [];

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
  }

  componentDidMount() {
    const player = this.refs.player;
    player.addEventListener("ended", this.nextSong);
  }

  // UNSAFE_componentWillUpdate(nextProps) {
  //   if (this.props !== nextProps) {
  //     this.setState(nextProps);
  //   }
  // }

  UNSAFE_componentWillUpdate(nextProps) {
    // debugger;
    if (this.props !== nextProps) {
      this.setState(state => {
        return { 
          currentSong: nextProps.currentSong, 
          playing: nextProps.playing,
          queue: state.queue.concat(nextProps.queue)
        }
      });
    }
  }

  play() {
    this.setState({ playing: true });
    this.refs.player.play();
  }

  pause() {
    this.setState({ playing: false });
    this.refs.player.pause();
  }

  nextSong() {
    this.songHistory.push(this.state.currentSong);
    if (!this.state.queue.length) return;
    this.setState(state => {
      return { currentSong: state.queue[1], queue: state.queue.slice(2) };
    });
  }

  prevSong() {
    if (!this.songHistory.length) return;
    this.setState(state => {
      return { 
        currentSong: this.songHistory.pop(), 
        queue: state.queue.unshift(state.currentSong) 
      };
    });
  }

  render() {
    const { currentSong, playing } = this.state;
    // debugger;
    return (
      <div className="music-player">
        <div className="control-buttons">
          <button onClick={this.play}>
            Play
          </button>

          <button onClick={this.pause}>
            Pause
          </button>

          <button onClick={this.prevSong}>
            Prev
          </button>

          <button onClick={this.nextSong}>
            Next
          </button>
        </div>

        <audio
          src={currentSong.song_url} 
          ref="player"
          autoPlay={playing} 
          > 
        </audio>
      </div>
    )
  }
}