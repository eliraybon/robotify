import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  updateCurrentSong,
  togglePlay,
  updateQueue,
  updateHistory,
  updateCurrentPlaylist
} from '../../actions/music_actions';
import { fetchSongs } from '../../util/song_api_util';

class PlaylistIndexItem extends React.Component {
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

  pause() {
    this.props.togglePlay(false);
  }

  play() {
    const { playlist, currentSong } = this.props;
    if (!playlist.song_ids.length) return;
    this.props.updateCurrentPlaylist(playlist.id);
    if (playlist.song_ids.includes(currentSong.id)) {
      this.props.togglePlay(true);
      return;
    }

    this.props.fetchSongs(this.props.playlist.id)
      .then(response => {
        const songs = Object.values(response);
        this.props.updateCurrentSong(songs[0]);
        this.props.updateQueue(songs.slice(1));
        this.props.togglePlay(true)
      });
  }


  renderPlay() {
    return (
      <div className="pii-hover-play-container" onClick={this.play}>
        <div className="custom-play-button"></div>
      </div>
    );
  }

  renderPause() {
    return (
      <div className="pii-hover-play-container" onClick={this.pause}>
        <div className="custom-pause-button">
          <div className="pause-button-bar"></div>
          <div className="pause-button-bar"></div>
        </div>
      </div>
    );
  }

  renderButton() {
    const { playlist, playing, currentPlaylistId } = this.props;
    if (playing && currentPlaylistId === playlist.id) {
      return this.renderPause();
    } else {
      return this.renderPlay();
    }
  }

  render() {
    const { playlist, currentSong } = this.props;
    const green = (this.props.currentPlaylistId === playlist.id) ? "green" : "";

    return (
      <li className="playlist-index-item">
        <div
          className="pii-cover"
          onMouseEnter={this.hover}
          onMouseLeave={this.leave}
        >
          <img
            src={playlist.cover_url}
            className="pi-playlist-cover"
            width="200"
            height="200"
          />

          {this.state.coverHover && (
            <span className="pii-hover">
              {this.renderButton()}
            </span>
          )}
        </div>

        <Link
          to={`/playlists/${playlist.id}`}
          className={`pi-playlist-title-link ${green}`}
        >
          {playlist.title}
        </Link>

        <Link
          to={`/library/playlists`}
          className="pi-user-email-link"
        >
          {playlist.user_email}
        </Link>
      </li>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentSong: state.music.currentSong,
    playing: state.music.playing,
    queue: state.music.queue,
    currentPlaylistId: state.music.currentPlaylistId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSongs: (playlistId) => fetchSongs({ type: 'playlist', playlist_id: playlistId }),
    updateCurrentSong: song => dispatch(updateCurrentSong(song)),
    togglePlay: play => dispatch(togglePlay(play)),
    updateQueue: queue => dispatch(updateQueue(queue)),
    updateSongHistory: history => dispatch(updateHistory(history)),
    updateCurrentPlaylist: playlistId => dispatch(updateCurrentPlaylist(playlistId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistIndexItem);