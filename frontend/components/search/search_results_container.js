import { connect } from 'react-redux';
import SearchResults from './search_results';

const mapStateToProps = state => {
  return {
    songs: Object.values(state.entities.songs),
    albums: Object.values(state.entities.albums),
    artists: Object.values(state.entities.artists)
  };
};

export default connect(
  mapStateToProps
)(SearchResults);

