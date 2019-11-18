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
      <ul className="song-index" >
        <li className="song-index-header">
          <div className="si-padding"></div>
          <div className="si-title-header">Title</div>
          <div className="si-artist-header">Artist</div>
          <div className="si-album-header">Album</div>
          <div className="si-runtime-header">
            <img 
              src="https://robotify-development.s3.amazonaws.com/si-clock.png"
              width="15px"
              height="15px"
              className="si-runtime-clock"
            />
          </div>
        </li>
        {songIndexItems}
      </ul>
    )
  }
}