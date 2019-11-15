import React from 'react';
import MenuButton from '../ui/menu_button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { likeSong, unlikeSong } from '../../actions/song_actions';
import { updateCurrentSong } from '../../actions/music_actions';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false, liked: false };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.likeSong = this.likeSong.bind(this);
    this.unlikeSong = this.unlikeSong.bind(this);
  }

  componentDidMount() {
    this.setState({ liked: this.props.song.isLiked })
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

    return (
      <li 
        className="song-index-item"
        onMouseOver={ this.mouseOver }
        onMouseLeave={ this.mouseLeave }
      >
        
        {/* <span className="sii-heart">{heart}</span> */}
        <button onClick={() => this.props.updateCurrentSong(song.id)}>Play</button>

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

        <MenuButton songId={ song.id } />
        {toggleLike}

        <span className="sii-runtime">{song.runtime}</span>
      </li>
    )
  }
}  


const mapDispatchToProps = dispatch => {
  return {
    likeSong: songId => dispatch(likeSong(songId)),
    unlikeSong: songId => dispatch(unlikeSong(songId)),
    updateCurrentSong: song => dispatch(updateCurrentSong(song))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SongIndexItem);


//this is going to end up being one of the most important components