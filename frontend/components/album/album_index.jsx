import React from 'react';
import AlbumIndexItem from './album_index_item';

export default class AlbumIndex extends React.Component {
  componentDidMount() {
    // if (this.props.albums.length) return;
    let context;
    const path = this.props.match.path;
    if (path === '/library/albums') context = 'library';
    if (path === '/explore') context = 'explore';
    if (path === '/browse/albums') context = 'browse';
    // if (path === '/browse/genres') context = 'genre';
    if (context) this.props.fetchAlbums(context);
  }

  render() {
    let { albums } = this.props;

    // if (this.props.match.path === '/browse/genres') {
    //   albums = albums.filter(album => album.genre === this.props.genre);
    // }

    const albumIndexItems = albums.map(album => {
      return <AlbumIndexItem album={ album } key={ album.id } />
    });
    
    return (
      <ul className="album-index">
        {albumIndexItems}
      </ul>
    )
  }
}