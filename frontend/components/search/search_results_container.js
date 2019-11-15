import { connect } from 'react-redux';
import SearchResults from './search_results';
import { clearState } from '../../actions/other_actions';

const mapStateToProps = state => {
  return {
    songs: Object.values(state.entities.songs),
    albums: Object.values(state.entities.albums),
    artists: Object.values(state.entities.artists)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearState: () => dispatch(clearState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);

