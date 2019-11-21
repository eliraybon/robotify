import React from 'react';
import { Link } from 'react-router-dom';

export default class ArtistIndexItem extends React.Component {

  render() {
    const { artist } = this.props;

    return (
      <li className="artist-index-item">
        <img
          src={artist.profile_img_url}
          className="arti-profile-img"
          width="200px"
          height="200px"
        />

        <Link
          to={`/artists/${artist.id}`}
          className="arti-artist-name-link"
        >
          {artist.name}
        </Link>
      </li>
    )
  }
}