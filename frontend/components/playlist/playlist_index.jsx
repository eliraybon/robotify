import React from 'react';
import PlaylistIndexItem from './playlist_index_item';

export default class PlaylistIndex extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { loading: true };
  // }

  componentDidMount() {
    if (this.props.selectedPlaylists) return;
    let context;
    const path = this.props.match.path;
    if (path === '/explore') context = 'explore';
    if (path === '/browse/albums') context = 'browse'
    if (context) this.props.fetchPlaylists(context);
      // .then(this.setState({ loading: false }))
  }

  render() {
    const playlists = this.props.selectedPlaylists || this.props.playlists;
    // if (this.state.loading) return null; 

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