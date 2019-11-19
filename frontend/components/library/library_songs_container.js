import { connect } from 'react-redux';
import LibrarySongs from './library_songs';
import { fetchSongs } from '../../actions/song_actions';
import { getLikedSongs } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    // songs: Object.values(state.entities.songs)
    songs: getLikedSongs(state)
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

