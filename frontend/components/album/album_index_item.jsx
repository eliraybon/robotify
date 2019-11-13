import React from 'react';
import { Link } from 'react-router-dom';

export default class AlbumIndexItem extends React.Component {
  
  render() {
    const { album } = this.props;
    
    return (
      <li className="album-index-item">
        <img 
          src={album.cover_url} 
          className="ai-album-cover" 
          width="250" 
          height="250" 
        />

        <Link
          to={`/albums/${album.id}`}
          className="ai-album-title-link"
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