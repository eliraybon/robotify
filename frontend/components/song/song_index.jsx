import React from 'react';
import SongIndexItem from './song_index_item';

export default class SongIndex extends React.Component {
  render() {
    const { songs } = this.props;
    const songIndexItems = songs.map(song => <SongIndexItem 
      song={ song } 
      key={ song.id }
    />)

    return (
      <ul>
        {songIndexItems}
      </ul>
    )
  }
}