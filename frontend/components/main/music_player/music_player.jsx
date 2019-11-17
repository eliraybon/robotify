import React from 'react';
import { Link } from 'react-router-dom';
// import ProgressBar from './progress_bar';

export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: 0, duration: 0 };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
    this.renderMainButton = this.renderMainButton.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.changeTime = this.changeTime.bind(this);
    this.seek = this.seek.bind(this);
    this.find = this.find.bind(this);
  }

  componentDidMount() {
    const player = this.refs.player;
    player.addEventListener("ended", this.nextSong);
    player.addEventListener("timeupdate", this.updateTime);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.refs.player.currentSrc) return;
    if (this.props.playing !== nextProps.playing) {
      (this.props.playing) ? this.pause() : this.play();
    }
  }

  play() {
    if (!this.refs.player.currentSrc && !this.props.queue.length) return;
    // if (!this.refs.player.currentSrc) this.nextSong();
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
    if (!queue.length) {
      this.setState({ currentTime: 0, duration: 0 });
      // this.props.togglePlay(false);   Don't know if I need this or not
      return;
    }
    this.props.updateSongHistory(songHistory.concat([currentSong]));
    this.props.updateCurrentSong(queue[0]);
    this.props.updateQueue(queue.slice(1));
  }

  seek() {
    this.refs.player.volume = 0;
  }

  find() {
    this.refs.player.volume = 1;
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

  changeTime(e) {
    e.preventDefault();
    this.setState({ currentTime: e.currentTarget.value });
    this.refs.player.currentTime = e.currentTarget.value;
  }

  updateTime() {
    this.setState({ currentTime: this.refs.player.currentTime, duration: this.refs.player.duration || 0 });
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
        // <button onClick={this.play}>
        //   Play
        // </button>

        <img
          onClick={this.play}
          src="https://robotify-development.s3.amazonaws.com/play_test.png"
          height="50px"
          width="50px"
        />
      )
    }
  }

  render() {
    const { currentSong, playing } = this.props;
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

          <input 
            type="range"
            min={0}
            max={this.state.duration}
            value={this.state.currentTime}
            onChange={this.changeTime}
            onMouseDown={this.seek}
            onMouseUp={this.find}
          />

          {/* <ProgressBar
            runtime={currentSong.runtime}
            timeElapsed={this.state.timeElapsed}
          /> */}
        </div>

        <audio
          src={currentSong.song_url} 
          ref="player"
          autoPlay={playing}> 
        </audio>
      </div>
    )
  }
}