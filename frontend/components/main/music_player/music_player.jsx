import React from 'react';
import { Link } from 'react-router-dom';
// import ProgressBar from './progress_bar';

export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentTime: 0, 
      duration: 0, 
      volume: 100, 
      muted: false,
      playPauseHover: false, 
      volumeImgHover: false,
      prevHover: false,
      nextHover: false 
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
    this.renderMainButton = this.renderMainButton.bind(this);
    this.renderVolumeImg = this.renderVolumeImg.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.changeTime = this.changeTime.bind(this);
    this.seek = this.seek.bind(this);
    this.find = this.find.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.mute = this.mute.bind(this);
    this.unMute = this.unMute.bind(this);
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

  changeVolume(e) {
    this.setState({ volume: e.currentTarget.value })
    if (e.currentTarget.value < 0.01) {
      this.mute();
      return;
    }
    if (e.currentTarget.value > 0.01 && this.state.muted) {
      this.setState({ muted: false })
    }
    this.refs.player.volume = e.currentTarget.value / 100;
  }

  mute() {
    this.setState({ muted: true, volume: 0 })
    this.refs.player.volume = 0;
  }

  unMute() {
    this.setState({muted: false, volume: 100 });
    this.refs.player.volume = 1;
  }

  renderVolumeImg() {
    let src;
    if (this.state.muted) {
      if (this.state.volumeImgHover) {
        src = "https://robotify-development.s3.amazonaws.com/volume_off_hover.png";
      } else {
        src = "https://robotify-development.s3.amazonaws.com/volume_off.png";
      }
      return (
        <img
          src={src}
          width="35px"
          height="35px"
          onClick={this.unMute}
          onMouseOver={() => this.setState({ volumeImgHover: true })}
          onMouseOut={() => this.setState({ volumeImgHover: false })}
          className="volume-img"
        />
      )
    } else {
      if (this.state.volumeImgHover) {
        src = "https://robotify-development.s3.amazonaws.com/volume_on_hover.png";
      } else {
        src = "https://robotify-development.s3.amazonaws.com/volume_on.png";
      }
      return (
        <img
          src={src}
          width="35px"
          height="35px"
          onClick={this.mute}
          onMouseOver={() => this.setState({ volumeImgHover: true })}
          onMouseOut={() => this.setState({ volumeImgHover: false })}
          className="volume-img"
        />
      )
    }
  }

  renderMainButton() {
    let src;
    let width;
    let height;
    if (this.props.playing) {
      if (this.state.playPauseHover) {
        src = "https://robotify-development.s3.amazonaws.com/pause_hover.png"
        width='36px'
        height='36px'
      } else {
        src = "https://robotify-development.s3.amazonaws.com/pause.png"
        width='34px'
        height='34px'
      }
      return (
        <img
          onClick={this.pause}
          src={src}
          height={height}
          width={width}
          onMouseOver={() => this.setState({ playPauseHover: true })}
          onMouseOut={() => this.setState({ playPauseHover: false })}
        />
      )
    } else {
      if (this.state.playPauseHover) {
        src = "https://robotify-development.s3.amazonaws.com/play_hover.png";
        width = '36px'
        height = '36px'
      } else {
        src = "https://robotify-development.s3.amazonaws.com/play.png";
        width="34px"
        height="34px"
      }
      return (
        <img
          onClick={this.play}
          src={src}
          height={height}
          width={width}
          onMouseOver={() => this.setState({ playPauseHover: true })}
          onMouseOut={() => this.setState({ playPauseHover: false })}
        />
      )
    }
  }

  render() {
    const { currentSong, playing } = this.props;
    return (
      <div className="music-player">
        <div className="song-display"> 
          {currentSong.cover_url && (
            <img
              src={currentSong.cover_url}
              width="50px"
              height="50px"
              className="current-song-img"
            />
          )}

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

            <img
              onClick={this.prevSong}
              onMouseOver={() => this.setState({ prevHover: true })}
              onMouseOut={() => this.setState({ prevHover: false })}
              src={(this.state.prevHover) ? "https://robotify-development.s3.amazonaws.com/prev_hover.png" : "https://robotify-development.s3.amazonaws.com/prev.png"}
              width="12px"
              height="13px"
              className="song-select"
            />

            {this.renderMainButton()}

            <img
              onClick={this.nextSong}
              onMouseOver={() => this.setState({ nextHover: true })}
              onMouseOut={() => this.setState({ nextHover: false })}
              src={(this.state.nextHover) ? "https://robotify-development.s3.amazonaws.com/next_hover.png" : "https://robotify-development.s3.amazonaws.com/next.png"}
              width="12px"
              height="13px"
              className="song-select"
            />

          </div>

          <div className="progress-bar-container">
            <input
              type="range"
              min={0}
              max={this.state.duration}
              value={this.state.currentTime}
              onChange={this.changeTime}
              onMouseDown={this.seek}
              onMouseUp={this.find}
              className="progress-bar"
            />
          </div>
        </div>

        <div className="volume-control">
          {this.renderVolumeImg()}

          <input 
            type="range"
            min={0}
            max={100}
            value={this.state.volume}
            onChange={this.changeVolume}
            className="volume-slider"
          />
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