import React from 'react';
import SongIndex from '../song/song_index';
import AlbumIndex from '../album/album_index_container';
import PlayButton from '../ui/play_button';


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
      this.props.fetchArtist(this.props.artistId).then(() => {
        this.setState({ followed: this.props.artist.isFollowed });
      })
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
        <div className="artist-show-header">
          <div className="artist-name-and-photo">
            <img
              className="arti-profile-img"
              src={artist.profile_img_url}
              width="200"
              height="200"
            />
            <h1 className="as-artist-name">{artist.name}</h1>
          </div>

          <div className="artist-show-buttons">
            <PlayButton />
            {toggleFollow}
          </div>
        </div>

        <h2 className="section-title">Songs</h2>
        <div className="artist-show-songs">
          <SongIndex songs={songs.slice(0, 5)} />
        </div>
 
        <h2 className="section-title">Albums</h2>
        <div className="artist-show-albums">
          <AlbumIndex match={this.props.match} />
        </div>
      </section>
    )
  }
}