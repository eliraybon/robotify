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
    this.state = { hover: false, liked: false };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.likeSong = this.likeSong.bind(this);
    this.unlikeSong = this.unlikeSong.bind(this);
    this.playSong = this.playSong.bind(this);
    this.renderPlayButton();
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

  renderPlayButton() {
    if (this.state.hover) {
      return (
        <img
          src="https://robotify-development.s3.amazonaws.com/play.png"
          onClick={this.playSong}
          height="39px"
          width="39px"
          className="sii-play"
        />
      )
    }
  }

  render() {
    //the heart and options buttons should end up being their own components
    const { song } = this.props;
    const heart = (this.state.hover) ? "H" : null;
    
    let toggleLike;
    if (this.state.liked) {
      toggleLike = (
        <button onClick={ this.unlikeSong }>
          Unlike
        </button>
      )
    } else {
      toggleLike = (
        <button onClick={ this.likeSong }>
          Like
        </button>
      )
    }

    const nowPlaying = (song.id === this.props.currentSongId) ? "playing" : "";

    return (
      <li  className={`song-index-item ${nowPlaying}`}
        onMouseOver={this.mouseOver}
        onMouseLeave={this.mouseLeave}
      >
        
        {/* <button onClick={ this.playSong }>Play</button> */}
        {this.renderPlayButton()}

        <button onClick={ () => this.props.addToQueue([song])}>Queue</button>

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
        {toggleLike}

        <span className="sii-runtime">{song.runtime}</span>
      </li>
    )
  }
}  

const mapStateToProps = state => {
  return {
    currentSongId: state.music.currentSong.id
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


//this is going to end up being one of the most important components