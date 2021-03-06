import React from 'react';
import SongIndex from '../song/song_index';
import AlbumHeader from './album_header';

export default class AlbumDetail extends React.Component {
  componentDidMount() {
    this.props.fetchAlbum(this.props.albumId)
  }

  componentDidUpdate(prevProps) {
    if (this.props.albumId !== prevProps.albumId) {
      this.props.fetchAlbum(this.props.albumId);
    }
  }

  render() {
    const { album, songs, likeAlbum, unlikeAlbum } = this.props;
    if (!album) return null;
    
    return (
      <section>
        <AlbumHeader 
          album={ album } 
          likeAlbum={ likeAlbum }
          unlikeAlbum={ unlikeAlbum }
        />
        <SongIndex songs={ songs } />
      </section>
    )
  }
}

