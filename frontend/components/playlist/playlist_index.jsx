import React from 'react';
import PlaylistIndexItem from './playlist_index_item';

export default class PlaylistIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylists('explore');
  }

  render() {
    const { playlists } = this.props;

    const playlistIndexItems = playlists.map(playlist => {
      return <PlaylistIndexItem playlist={ playlist } key={ playlist.id } />
    });

    return (
      <div className="playlist-index-container">
        <ul className="playlist-index">
          {playlistIndexItems}
        </ul>
      </div>
    )
  }
}