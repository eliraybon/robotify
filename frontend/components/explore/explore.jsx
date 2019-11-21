import React from 'react';
import { connect } from 'react-redux';
import AlbumIndex from '../album/album_index_container';
import PlaylistIndex from '../playlist/playlist_index_container';
import SongIndex from '../song/song_index';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions';

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    const { fetchAlbums, fetchPlaylists, fetchSongs } = this.props;
    fetchAlbums()
      .then(() => fetchPlaylists()
        .then(() => fetchSongs()))
          .then(() => this.setState({ loading: false }))
  }

  render() {
    const { albums, playlists, songs } = this.props;
    if (this.state.loading) return null;
    // if (!(albums || songs || playlists)) return null;

    return (
      <div className="explore">
        <h2 className="explore-header">Featured</h2>
        <div className="explore-music-container">
          <AlbumIndex selectedAlbums={ this.props.albums } />
        </div>

        <h2 className="explore-header">This is a test</h2>
        <div className="explore-music-container">
          <PlaylistIndex selectedPlaylists={this.props.playlists} />
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    albums: Object.values(state.entities.albums),
    playlists: Object.values(state.entities.playlists),
    songs: Object.values(state.entities.songs)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums('explore')),
    fetchPlaylists: () => dispatch(fetchPlaylists('explore')),
    fetchSongs: () => dispatch(fetchSongs('explore'))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);