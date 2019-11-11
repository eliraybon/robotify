import React from 'react';

export default class ArtistShow extends React.Component {
  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.artistId !== prevProps.artistId) {
      this.props.fetchArtist(this.props.artistId);
    }
  }

  //maybe add a cool method to return an artists top 10 most played songs using
  //quicksort

  render() {
    const { artist, albums, songs } = this.props;
    debugger;
    if (!artist) return null;
    debugger;
    const songItems = songs.map(song => <li key={ song.id }>{song.title}</li>);
    const albumItems = albums.map(album => <li key={ album.id }>{album.title}</li> )

    return (
      <section>
        <h1>{artist.name}</h1>
        <h2>Songs</h2>
        <ul>
          {songItems}
        </ul>
        <h2>Albums</h2>
        <ul>
          {albumItems}
        </ul>
        {/* <SongIndex songs={ songs } />
        <AlbumIndex albums={ albums } /> */}
      </section>
    )
  }
}