import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { fetchAlbums } from '../../actions/album_actions';

const mapStateToProps = state => {
  return {
    albums: Object.values(state.entities.albums)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbums: context => dispatch(fetchAlbums(context))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex);

