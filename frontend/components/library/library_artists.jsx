import React from 'react';
import ArtistIndex from '../artist/artist_index';

export default class LibraryArtists extends React.Component {
  componentDidMount() {
    this.props.fetchArtists('library');
  }

  render() {
    return (
      <div className="library-artists">
        <h1 className="artists-header">Artists</h1>
        <ArtistIndex artists={this.props.artists} />
      </div>
    )
  }
}