import React from 'react';

import SongResults from './song_results';
import AlbumResults from './album_results';
import ArtistResults from './artist_results';

export default class SearchResults extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.clearState();
  }

  render() {
    const { songs, albums, artists } = this.props;

    return (
      <div className="search-results">
        <h1>Search Results</h1>

        <div className="text">
          <AlbumResults albums={ albums } />
          <ArtistResults artists={ artists } />
        </div>
        <SongResults songs={ songs } />
      </div>
    )
  }
}