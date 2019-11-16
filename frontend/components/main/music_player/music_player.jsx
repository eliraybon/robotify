import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from './progress_bar';

export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timeElapsed: 0 };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
    this.renderMainButton = this.renderMainButton.bind(this);
  }

  componentDidMount() {
    const player = this.refs.player;
    player.addEventListener("ended", this.nextSong);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.refs.player.currentSrc) return;
    if (this.props.playing !== nextProps.playing) {
      (this.props.playing) ? this.pause() : this.play();
    }
  }

  play() {
    if (!this.refs.player.currentSrc) return;
    this.props.togglePlay(true);
    this.refs.player.play();
  }

  pause() {
    if (!this.refs.player.currentSrc) return;
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

  //rough sketch of how shuffle play will work. Repeat will go here as well.

  // nextSong() {
  //   const { currentSong, queue, songHistory } = this.props;
  //   if (!queue.length) return;
  //   this.props.updateSongHistory(songHistory.concat([currentSong]));
  //   if (!shuffle) {
  //     const idx = Math.floor(Math.random() * queue.length);
  //     this.props.updateCurrentSong(queue[idx]);
  //     this.props.updateQueue(
  //       queue.slice(0, idx-1).concat(queue.slice(idx, queue.length)
  //     ));
  //   } else {
  //     this.props.updateCurrentSong(queue[0]);
  //     this.props.updateQueue(queue.slice(1));
  //   }
  // }

  prevSong() {
    const { currentSong, queue, songHistory } = this.props;
    if (!songHistory.length) return;
    this.props.updateQueue([currentSong].concat(queue));
    this.props.updateCurrentSong(songHistory.pop());
    this.props.updateSongHistory(songHistory);
  }

  renderMainButton() {
    if (this.props.playing) {
      return (
        <button onClick={this.pause}>
          Pause
        </button>
      )
    } else {
      return (
        <button onClick={this.play}>
          Play
        </button>
      )
    }
  }

  render() {
    const { currentSong, playing } = this.props;
    debugger;
    return (
      <div className="music-player">
        <div className="song-display"> 
          <img
            src={currentSong.cover_url}
            width="50px"
            height="50px"
            className="current-song-img"
          />

          <div className="song-info">
            <Link 
              to={`/albums/${currentSong.album_id}`}
              className="mp-song-title"
            >
                {currentSong.title}
            </Link>
            <Link 
              to={`/artists/${currentSong.artist_id}`}
              className="mp-artist-name"
            >
              {currentSong.artist_name}
            </Link>
          </div>
        </div>

        <div className="mp-main">
          <div className="control-buttons">
            {this.renderMainButton()}

            <button onClick={this.prevSong}>
              Prev
          </button>

            <button onClick={this.nextSong}>
              Next
          </button>
          </div>

          <ProgressBar
            runtime={currentSong.runtime}
            timeElapsed={this.state.timeElapsed}
          />
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