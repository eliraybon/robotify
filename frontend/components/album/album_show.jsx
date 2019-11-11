import React from 'react';
import SongIndex from '../song/song_index';

export default class AlbumDetail extends React.Component {
  componentDidMount() {
    this.props.fetchAlbum(this.props.albumId)
  }

  render() {
    const { album, songs } = this.props;
    const songItems = songs.map(song => <li key={ song.id }>{song.title}</li>)

    if (!album) return null;

    return (
      <section>
        <h1>{album.title}</h1>
        <h3>{album.artist_name}</h3>
        {/* <ul>
          {songItems}
        </ul> */}
        <SongIndex songs={ songs } />
      </section>
    )
  }
}

