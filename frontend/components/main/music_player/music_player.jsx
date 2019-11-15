import React from 'react';

export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.nextSong = this.nextSong.bind(this);
    // this.prevSong = this.prevSong.bind(this);
  }

  componentDidMount() {
    const player = this.refs.player;
    player.addEventListener("ended", this.nextSong);
  }

  // UNSAFE_componentWillUpdate(nextProps) {
  //   if (this.props !== nextProps) {
  //     this.setState(state => {
  //       return { 
  //         currentSong: nextProps.currentSong, 
  //         playing: nextProps.playing,
  //         queue: state.queue.concat(nextProps.queue)
  //       }
  //     });
  //   }
  // }

  play() {
    this.props.togglePlay(true);
    this.refs.player.play();
  }

  pause() {
    this.props.togglePlay(false);
    this.refs.player.pause();
  }

  nextSong() {
    if (!this.props.queue.length) return;
    this.props.updateCurrentSong(this.props.queue[0]);
    this.props.updateQueue(this.props.queue.slice(1));
  }

  render() {
    const { currentSong, playing } = this.props;
    return (
      <div className="music-player">
        <div className="control-buttons">
          <button onClick={this.play}>
            Play
          </button>

          <button onClick={this.pause}>
            Pause
          </button>

          {/* <button onClick={this.prevSong}>
            Prev
          </button> */}

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