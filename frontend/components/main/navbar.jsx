import React from 'react';
import SearchBar from '../search/search_bar_container';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <SearchBar history={ this.props.history} />
      </div>
    )
  }
}