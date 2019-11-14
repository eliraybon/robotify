import * as SearchApiUtil from '../util/search_api_util';

export const UPDATE_SEARCH = "UPDATE_SEARCH";

const recieveSearchTerm = payload => {
  return {
    type: UPDATE_SEARCH,
    payload
  };
};

export const updateSearch = searchTerm => dispatch => {
  return SearchApiUtil.updateSearch(searchTerm)
    .then(payload => dispatch(recieveSearchTerm(payload)));
}

