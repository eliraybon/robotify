import React from 'react';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.redirectToSearch = this.redirectToSearch.bind(this);
  }

  redirectToSearch() {
    this.props.history.push('/search');
  }

  render() {
    return (
      <div className="navbar">
        <input
          className="search-bar"
          type="text"
          placeholder="⌕ Search"
          onClick={ this.redirectToSearch }
        >
        </input>
      </div>
    )
  }
}