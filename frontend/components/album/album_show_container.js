import { connect } from 'react-redux';
import { 
  fetchAlbum,
  likeAlbum,
  unlikeAlbum 
} from '../../actions/album_actions';
import AlbumShow from './album_show';
import { getAlbumSongs } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const albumId = parseInt(ownProps.match.params.albumId);
  return {
    albumId,
    album: state.entities.albums[albumId],
    songs: getAlbumSongs(state, albumId)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
    likeAlbum: albumId => dispatch(likeAlbum(albumId)),
    unlikeAlbum: albumId => dispatch(unlikeAlbum(albumId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);