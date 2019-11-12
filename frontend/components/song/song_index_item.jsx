import React from 'react';
import { Link } from 'react-router-dom';

export default class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
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

    return (
      <li 
        className="song-index-item"
        onMouseOver={ this.mouseOver }
        onMouseLeave={ this.mouseLeave }
      >
        <span className="sii-heart">{heart}</span>

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

        <span className="sii-runtime">{song.runtime}</span>
      </li>
    )
  }
}  

//this is going to end up being one of the most important components