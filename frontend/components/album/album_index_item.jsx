
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  updateCurrentSong,
  togglePlay,
  updateQueue,
  updateHistory
} from '../../actions/music_actions';
import { fetchSongs } from '../../util/song_api_util';

class AlbumIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { coverHover: false };

    this.hover = this.hover.bind(this);
    this.leave = this.leave.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  hover() {
    this.setState({ coverHover: true });
  }

  leave() {
    this.setState({ coverHover: false });
  }

  play() {
    const { album, currentSong } = this.props;
    if (album.song_ids.includes(currentSong.id)) {
      this.props.togglePlay(true);
      return;
    }

    this.props.fetchSongs(this.props.album.id)
      .then(response => {
        const songs = Object.values(response);
        this.props.updateCurrentSong(songs[0]);
        this.props.updateQueue(songs.slice(1));
        this.props.togglePlay(true)
      });
  }

  pause() {
    this.props.togglePlay(false);
  }

  renderPlay() {
    return (
      <div className="aii-hover-play-container" onClick={this.play}>
        <div className="custom-play-button"></div>
      </div>
    );
  }

  renderPause() {
    return (
      <div className="aii-hover-play-container" onClick={this.pause}>
        <div className="custom-pause-button">
          <div className="pause-button-bar"></div>
          <div className="pause-button-bar"></div>
        </div>
      </div>
    );
  }

  renderButton() {
    const { album, playing, currentSong } = this.props;
    if (playing && album.song_ids.includes(currentSong.id)) {
      return this.renderPause();
    } else {
      return this.renderPlay();
    }
  }

  render() {
    const { album, currentSong } = this.props;
    const green = (album.song_ids.includes(currentSong.id)) ? "green" : "";

    return (
      <li className="album-index-item">
        <div
          className="aii-cover"
          onMouseEnter={this.hover}
          onMouseLeave={this.leave}
        >
          <img
            src={album.cover_url}
            className="ai-album-cover"
          // width="200"
          // height="200"
          />

          {this.state.coverHover && (
            <span className="aii-hover">
              {this.renderButton()}
            </span>
          )}
        </div>

        <Link
          to={`/albums/${album.id}`}
          className={`ai-album-title-link ${green}`}
        >
          {album.title}
        </Link>

        <Link
          to={`/artists/${album.artist_id}`}
          className="ai-artist-name-link"
        >
          {album.artist_name}
        </Link>
      </li>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentSong: state.music.currentSong,
    playing: state.music.playing,
    queue: state.music.queue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSongs: (albumId) => fetchSongs({ type: 'album', album_id: albumId }),
    updateCurrentSong: song => dispatch(updateCurrentSong(song)),
    togglePlay: play => dispatch(togglePlay(play)),
    updateQueue: queue => dispatch(updateQueue(queue)),
    updateSongHistory: history => dispatch(updateHistory(history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndexItem);