import React from 'react';

export default class SongIndexItem extends React.Component {
  render() {
    const { song } = this.props;

    return (
      <li>{song.title}</li>
    )
  }
}  

//this is going to end up being one of the most important components