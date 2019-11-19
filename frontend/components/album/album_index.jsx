import React from 'react';
import AlbumIndexItem from './album_index_item';

export default class AlbumIndex extends React.Component {
  componentDidMount() {
    if (this.props.selectedAlbums) return;
    let context;
    const path = this.props.match.path;
    if (path === '/library/albums') context = 'library';
    if (path === '/explore') context = 'explore';
    if (path === '/browse/albums') context = 'browse';
    if (context) this.props.fetchAlbums(context);
  }

  render() {
    // let { albums } = this.props;
    let albums = this.props.selectedAlbums || this.props.albums;

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