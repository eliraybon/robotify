import React from 'react';
import ArtistIndexItem from './artist_index_item';

export default class ArtistIndex extends React.Component {
  render() {
    const { artists } = this.props;
    const artistIndexItems = artists.map(artist => <ArtistIndexItem
      artist={ artist }
      key={ artist.id }
    />)

    return (
      <ul className="artist-index">
        {artistIndexItems}
      </ul>
    )
  }
}