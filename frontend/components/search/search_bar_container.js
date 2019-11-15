import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { updateSearch } from '../../actions/search_actions';

const mapDispatchToProps = dispatch => {
  return {
    updateSearch: searchTerm => dispatch(updateSearch(searchTerm))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);