import React from 'react';
import SongIndex from '../song/song_index';
import PlayButton from '../ui/play_button';

export default class LibrarySongs extends React.Component {
  componentDidMount() {
    this.props.fetchSongs('library');
  }

  render() {
    // if (!this.props.songs) return null;

    return (
      <div className="library-songs">
        <h1 className="songs-header">Liked Songs</h1>
        <PlayButton />
        <SongIndex songs={this.props.songs} />
      </div>
    )
  }
}