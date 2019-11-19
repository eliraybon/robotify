import React from 'react';
import AlbumIndex from '../album/album_index_container';
import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions';

class BrowseGenres extends React.Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    const { albums } = this.props;

    const rock = albums.filter(album => album.genre === "Rock");
    const alternative = albums.filter(album => album.genre === "Alternative")
    const electronic = albums.filter(album => album.genre === "Electronic")

    return (
      <div>
        <h2>Future Funk!</h2>
        <AlbumIndex match={ this.props.match } selectAlbums={ rock } />
        <h2>Mallsoft</h2>
        <AlbumIndex match={this.props.match} selectAlbums={ alternative } />
        <h2>Electronic</h2>
        <AlbumIndex match={this.props.match} selectAlbums={ electronic } />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    albums: Object.values(state.entities.albums)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums('genre'))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseGenres);