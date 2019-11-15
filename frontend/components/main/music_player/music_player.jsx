import React from 'react';

export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

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
    const { currentSong, queue, songHistory } = this.props;
    if (!queue.length) return;
    this.props.updateSongHistory(songHistory.concat([currentSong]));
    this.props.updateCurrentSong(queue[0]);
    this.props.updateQueue(queue.slice(1));
  }

  prevSong() {
    const { currentSong, queue, songHistory } = this.props;
    if (!songHistory.length) return;
    this.props.updateQueue([currentSong].concat(queue));
    this.props.updateCurrentSong(songHistory.pop());
    this.props.updateSongHistory(songHistory);
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