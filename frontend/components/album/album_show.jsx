import React from 'react';
import SongIndex from '../song/song_index';

export default class AlbumDetail extends React.Component {
  componentDidMount() {
    this.props.fetchAlbum(this.props.albumId)
  }

  render() {
    const { album, songs } = this.props;
    if (!album) return null;

    const songItems = songs.map(song => <li key={ song.id }>{song.title}</li>)


    return (
      <section>
        <h1>{album.title}</h1>
        <h3>{album.artist_name}</h3>
        <SongIndex songs={ songs } />
      </section>
    )
  }
}

