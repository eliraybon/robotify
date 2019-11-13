import React from 'react';
import SongIndex from '../song/song_index';
import AlbumIndex from '../album/album_index_container';


export default class ArtistShow extends React.Component {
  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.artistId !== prevProps.artistId) {
      this.props.fetchArtist(this.props.artistId);
    }
  }

  render() {
    const { artist, albums, songs } = this.props;
    if (!artist) return null;
    // const songItems = songs.map(song => <li key={ song.id }>{song.title}</li>);
    const albumItems = albums.map(album => <li key={ album.id }>{album.title}</li> )

    return (
      <section className="artist-show">
        <h1 className="as-artist-name">{artist.name}</h1>
        <img 
          class="arti-profile-img"
          src={artist.profile_img_url}
          width="200"
          height="200"
        />
        <h2 className="section-title">Songs</h2>
        <SongIndex songs={ songs } />
 
        <h2 className="section-title">Albums</h2>
        <AlbumIndex match={this.props.match}/>
      </section>
    )
  }
}