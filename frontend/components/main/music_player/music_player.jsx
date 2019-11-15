import React from 'react';

export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentSong: props.currentSong, 
      playing: props.playing,
      queue: props.queue
    };
    this.songHistory = [];

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    // this.nextSong = this.nextSong.bind(this);
    // this.prevSong = this.prevSong.bind(this);
  }

  play() {
    this.setState({ playing: true });
    this.refs.player.play();
  }

  pause() {
    this.setState({ playing: false });
    this.refs.player.pause();
  }

  // nextSong() {
  //   this.history.push(this.state.currentSong);
  //   this.setState({ currentSong: this.state.queue[0], queue: })
  // }

  // prevSong() {

  // }

  render() {
    const { currentSong } = this.state;
    debugger;
    return (
      <div className="music-player">
        <audio
          src={this.state.currentSong.song_url} 
          ref="player"
          autoPlay={this.state.playing} 
          > 
        </audio>
      </div>
    )
  }
}