import React from 'react';
import MenuButton from '../ui/menu_button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { likeSong, unlikeSong } from '../../actions/song_actions';
import { 
  updateCurrentSong, 
  addToQueue,
  togglePlay 
} from '../../actions/music_actions';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hover: false, 
      liked: false,
      playHover: false, 
      likeHover: false
    };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.likeSong = this.likeSong.bind(this);
    this.unlikeSong = this.unlikeSong.bind(this);
    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
  }

  componentDidMount() {
    this.setState({ liked: this.props.song.isLiked })
  }

  componentDidUpdate(prevProps) {
    if (this.props.song.isLiked !== prevProps.song.isLiked) {
      this.setState({ liked: this.props.song.isLiked })
    }
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
    this.props.togglePlay(true);
  }

  pauseSong() {
    this.props.togglePlay(false);
  }

  renderPlayButton() {
    const { song, currentSongId } = this.props;

    if (this.state.hover && !this.props.playing) {
      return (
        <img
          src="https://robotify-development.s3.amazonaws.com/sii-play.png"
          onClick={this.playSong}
          height="30px"
          width="30px"
          className="sii-play"
        />
      )
    } 
    
    if (song.id === this.props.currentSongId) {
      if (this.state.hover && !this.state.playHover) {
        return (
          <img
            src="https://robotify-development.s3.amazonaws.com/sii-playing_hover.png"
            onMouseOver={() => this.setState({ playHover: true })}
            height="30px"
            width="30px"
            className="sii-play"
          />
        )
      } else if (!this.state.hover && !this.state.playHover) {
        return (
          <img
            src="https://robotify-development.s3.amazonaws.com/sii-playing.png"
            onMouseOver={() => this.setState({ playHover: true })}
            height="30px"
            width="30px"
            className="sii-play"
          />
        )
      }
    } 

    if (this.props.playing && this.state.playHover) {
      return (
        <img
          src="https://robotify-development.s3.amazonaws.com/sii-pause.png"
          onClick={this.pauseSong}
          onMouseLeave={() => this.setState({ playHover: false })}
          height="30px"
          width="30px"
          className="sii-play"
        />
      )
    }
  }

  renderLikeButton() {
    const { song } = this.props;

    if (this.state.hover && this.state.liked && !this.state.likeHover) {
      return (
        <img
          onMouseOver={() => this.setState({ likeHover: true })}
          src="https://robotify-development.s3.amazonaws.com/sii-liked_hover.png"
          width="15px"
          height="15px"
        />
      )
    } else if (!this.state.hover && this.state.liked && !this.state.likeHover) {
      return (
        <img
          src="https://robotify-development.s3.amazonaws.com/sii-liked.png"
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
          width="15px"
          height="15px"
        />
      )
    } else if (!this.state.hover && !this.state.liked) {
      return (
        <img
          src="https://robotify-development.s3.amazonaws.com/sii-unliked.png"
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

    return (
      <li  className={`song-index-item ${nowPlaying}`}
        onMouseOver={this.mouseOver}
        onMouseLeave={this.mouseLeave}
      >
        
        <div className="sii-play-button-container">
          {this.renderPlayButton()}
        </div>

        <div className="sii-like-container">
          {this.renderLikeButton()}
        </div>

        <span className="sii-song-title">{song.title}</span>

        <Link 
          to={`/artists/${song.artist_id}`}
          className="sii-artist-name sii-link">
            {song.artist_name}
        </Link>

        <Link 
          to={`/albums/${song.album_id}`}
          className="sii-album-title sii-link">
            {song.album_title}
        </Link>

        <MenuButton song={song} songId={ song.id } type="song"/>

        <span className="sii-runtime">{song.runtime}</span>
      </li>
    )
  }
}  

const mapStateToProps = state => {
  return {
    currentSongId: state.music.currentSong.id,
    playing: state.music.playing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    likeSong: songId => dispatch(likeSong(songId)),
    unlikeSong: songId => dispatch(unlikeSong(songId)),
    updateCurrentSong: song => dispatch(updateCurrentSong(song)),
    addToQueue: queue => dispatch(addToQueue(queue)),
    togglePlay: play => dispatch(togglePlay(play))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndexItem);