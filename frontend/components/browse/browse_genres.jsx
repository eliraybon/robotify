import React from 'react';
import AlbumIndex from '../album/album_index_container';

export default class BrowseGenres extends React.Component {
  render() {
    return (
      <div>
        <h2>Future Funk!</h2>
        <AlbumIndex match={ this.props.match } genre="Rock" />
        <h2>Mallsoft</h2>
        <AlbumIndex match={this.props.match} genre="Alternative" />
        <h2>Electronic</h2>
        <AlbumIndex match={this.props.match} genre="Electronic" />
      </div>
    )
  }
}