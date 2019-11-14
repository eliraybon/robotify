import React from 'react';
import SongIndex from '../song/song_index';
import AlbumIndex from '../album/album_index_container';


export default class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { followed: false };

    this.followArtist = this.followArtist.bind(this);
    this.unfollowArtist = this.unfollowArtist.bind(this);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId).then(() => {
      this.setState({ followed: this.props.artist.isFollowed });
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.artistId !== prevProps.artistId) {
      this.props.fetchArtist(this.props.artistId);
    }
  }

  followArtist() {
    this.props.followArtist(this.props.artist.id).then(() => {
      this.setState({ followed: true });
    })
  }

  unfollowArtist() {
    this.props.unfollowArtist(this.props.artist.id).then(() => {
      this.setState({ followed: false });
    })
  }


  render() {
    const { artist, albums, songs } = this.props;
    if (!artist) return null;
  
    const albumItems = albums.map(album => <li key={ album.id }>{album.title}</li> )

    let toggleFollow;
    if (this.state.followed) {
      toggleFollow = (
        <button className="follow-button" onClick={ this.unfollowArtist }>
          Unfollow
        </button>
      )
    } else {
      toggleFollow = (
        <button className="follow-button" onClick={ this.followArtist }>
          Follow
        </button>
      )
    }

    return (
      <section className="artist-show">
        <h1 className="as-artist-name">{artist.name}</h1>
        <img 
          className="arti-profile-img"
          src={artist.profile_img_url}
          width="200"
          height="200"
        />

        {toggleFollow}

        <h2 className="section-title">Songs</h2>
        <SongIndex songs={ songs } />
 
        <h2 className="section-title">Albums</h2>
        <AlbumIndex match={this.props.match}/>
      </section>
    )
  }
}