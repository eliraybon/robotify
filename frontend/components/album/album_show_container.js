import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/album_actions';
import AlbumShow from './album_show';

const mapStateToProps = (state, ownProps) => {
  const albumId = parseInt(ownProps.match.params.albumId);
  return {
    albumId,
    album: state.entities.albums[albumId],
    songs: Object.values(state.entities.songs)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);