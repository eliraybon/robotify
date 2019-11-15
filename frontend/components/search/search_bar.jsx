import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.redirectToSearch = this.redirectToSearch.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.updateSearch(e.currentTarget.value);
  }

  redirectToSearch() {
    this.props.history.push('/search');
  }

  render() {
    return (
      <input
        className="search-bar"
        type="text"
        placeholder="⌕ Search"
        onClick={this.redirectToSearch}
        onChange={this.handleUpdate}
      >
      </input>
    )
  }
}