import React from 'react';
import MenuButton from '../ui/menu_button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { likeSong, unlikeSong } from '../../actions/song_actions';
import {
  updateCurrentSong,
  updateQueue,
  togglePlay
} from '../../actions/music_actions';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      liked: false,
      playHover: false,
      likeHover: false,
      menuClicked: false
    };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.likeSong = this.likeSong.bind(this);
    this.unlikeSong = this.unlikeSong.bind(this);
    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.menuClick = this.menuClick.bind(this);
    this.closeAll = this.closeAll.bind(this);
  }

  componentDidMount() {
    this.setState({ liked: this.props.song.isLiked });
    document.addEventListener("mousedown", this.handleOutsideClick);
  }

  componentDidUpdate(prevProps) {
    if (this.props.song.isLiked !== prevProps.song.isLiked) {
      this.setState({ liked: this.props.song.isLiked })
    }
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick);
  }

  closeAll() {
    this.setState({ hover: false, menuClicked: false });
  }

  handleOutsideClick() {
    this.setState({ menuClicked: false });
  }

  likeSong() {
    this.props.likeSong(this.props.song.id).then(() => {
      this.setState({ liked: true });
    })
  }

  unlikeSong() {
    this.props.unlikeSong(this.props.song.id).then(() => {
      this.setState({ liked: false });
    })
  }

  mouseOver(e) {
    e.preventDefault();
    this.setState({ hover: true });
  }

  mouseLeave(e) {
    e.preventDefault();
    this.setState({ hover: false })
  }

  playSong() {
    this.props.updateCurrentSong(this.props.song);
    //find index of this.props.song in the state
    let currentSongIndex;
    this.props.songs.forEach((song, i) => {
      if (song.id === this.props.song.id) {
        currentSongIndex = i;
      }
    })
    this.props.updateQueue(this.props.songs.slice(currentSongIndex + 1, this.props.songs.length));
    this.props.togglePlay(true);
  }

  pauseSong() {
    this.props.togglePlay(false);
    this.setState({ playHover: false })
  }

  menuClick(e) {
    this.setState({ menuClicked: true });
    if (e.target.id === 'triple-dots') return;
    document.getElementById('triple-dots').click();
  }

  renderPlayButton() {
    const { song, currentSongId } = this.props;

    if (this.state.hover
      && ((this.props.playing && song.id !== currentSongId)
        || (!this.props.playing))
    ) {
      return (
        <img
          src="https://robotify-development.s3.amazonaws.com/sii-play.png"
          onClick={this.playSong}
          onMouseOver={() => this.setState({ playHover: true })}
          onMouseOut={() => this.setState({ playHover: false })}
          height="30px"
          width="30px"
          className="sii-play"
        />
      )
    }

    if (this.props.playing && song.id === currentSongId && this.state.playHover) {
      return (
        <img
          src="https://robotify-development.s3.amazonaws.com/sii-pause.png"
          onClick={this.pauseSong}
          onMouseOver={() => this.setState({ playHover: true })}
          onMouseLeave={() => this.setState({ playHover: false })}
          height="30px"
          width="30px"
          className="sii-play"
        />
      )
    }

    if (song.id === currentSongId) {
      if (this.state.hover /* && !this.state.playHover*/) {
        return (
          <img
            src="https://robotify-development.s3.amazonaws.com/sii-playing_hover.png"
            onMouseOver={() => this.setState({ playHover: true })}
            onMouseOut={() => this.setState({ playHover: false })}
            height="30px"
            width="30px"
            className="sii-play"
          />
        )
      } else if (!this.state.hover /*&& !this.state.playHover*/) {
        return (
          <img
            src="https://robotify-development.s3.amazonaws.com/sii-playing.png"
            onMouseOver={() => this.setState({ playHover: true })}
            onMouseOut={() => this.setState({ playHover: false })}
            height="30px"
            width="30px"
            className="sii-play"
          />
        )
      }
    }
  }

  renderLikeButton() {
    const { song } = this.props;

    if (this.state.hover && this.state.liked && !this.state.likeHover) {
      return (
        <img
          onMouseOver={() => this.setState({ likeHover: true })}
          src="https://robotify-development.s3.amazonaws.com/sii-liked_hover.png"
          onMouseOver={() => this.setState({ likeHover: true })}
          onMouseOut={() => this.setState({ likeHover: false })}
          width="15px"
          height="15px"
        />
      )
    } else if (!this.state.hover && this.state.liked && !this.state.likeHover) {
      return (
        <img
          src="https://robotify-development.s3.amazonaws.com/sii-liked.png"
          onMouseOver={() => this.setState({ likeHover: true })}
          onMouseOut={() => this.setState({ likeHover: false })}
          width="15px"
          height="15px"
        />
      )
    }

    if (this.state.hover && !this.state.liked) {
      return (
        <img
          src="https://robotify-development.s3.amazonaws.com/sii-unliked_hover.png"
          onClick={this.likeSong}
          onMouseOver={() => this.setState({ likeHover: true })}
          onMouseOut={() => this.setState({ likeHover: false })}
          width="15px"
          height="15px"
        />
      )
    } else if (!this.state.hover && !this.state.liked) {
      return (
        <img
          src="https://robotify-development.s3.amazonaws.com/sii-unliked.png"
          onMouseOver={() => this.setState({ likeHover: true })}
          onMouseOut={() => this.setState({ likeHover: false })}
          width="15px"
          height="15px"
        />
      )
    }

    if (this.state.liked && this.state.likeHover) {
      return (
        <img
          src="https://robotify-development.s3.amazonaws.com/sii-unlike.png"
          onClick={this.unlikeSong}
          onMouseOver={() => this.setState({ likeHover: true })}
          onMouseOut={() => this.setState({ likeHover: false })}
          width="15px"
          height="15px"
        />
      )
    }
  }

  render() {
    const { song } = this.props;

    const nowPlaying = (song.id === this.props.currentSongId) ? "playing" : "";

    let mobilePlaySrc;
    let mobilePlayAction;

    if (this.props.playing && nowPlaying) {
      mobilePlaySrc = "https://robotify-development.s3.amazonaws.com/pause-button-image.png";
      mobilePlayAction = this.pauseSong;
    } else {
      mobilePlaySrc = "https://robotify-development.s3.amazonaws.com/play-button-image.png";
      mobilePlayAction = this.playSong;
    }

    return (
      <li className={`song-index-item ${nowPlaying}`}
        onMouseOver={this.mouseOver}
        onMouseLeave={this.mouseLeave}
      >

        <div className="sii-play-button-container">
          {this.renderPlayButton()}
          <img
            className="mobile-play"
            src={mobilePlaySrc}
            onClick={mobilePlayAction}
          />
        </div>

        <div className="sii-like-container">
          {this.renderLikeButton()}
        </div>

        <span className="sii-song-title">{song.title}</span>

        <div className="sii-artist-name">
          <Link
            to={`/artists/${song.artist_id}`}
            className="sii-link">
            {song.artist_name}
          </Link>
        </div>

        <div className="sii-album-title">
          <Link
            to={`/albums/${song.album_id}`}
            className="sii-link">
            {song.album_title}
          </Link>
        </div>

        <div
          className="sii-menu-button-container"
          onClick={this.menuClick}
        >

          {(this.state.hover || this.state.menuClicked) && (
            <MenuButton song={song} songId={song.id} closeAll={this.closeAll} type="song" />
          )}

        </div>

        <span className="sii-runtime">{song.runtime}</span>
      </li>
    )
  }
}

const mapStateToProps = state => {
  return {
    songs: Object.values(state.entities.songs),
    currentSongId: state.music.currentSong.id,
    playing: state.music.playing,
    queue: state.music.queue,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    likeSong: songId => dispatch(likeSong(songId)),
    unlikeSong: songId => dispatch(unlikeSong(songId)),
    updateCurrentSong: song => dispatch(updateCurrentSong(song)),
    updateQueue: queue => dispatch(updateQueue(queue)),
    togglePlay: play => dispatch(togglePlay(play))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndexItem);