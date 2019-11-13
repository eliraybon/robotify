import { connect } from 'react-redux';
import LibrarySongs from './library_songs';
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = state => {
  return {
    songs: Object.values(state.entities.songs)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSongs: context => dispatch(fetchSongs(context))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LibrarySongs);

