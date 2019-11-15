import React from 'react';
import { Link } from 'react-router-dom';
import PlayButton from '../ui/play_button';

export default class PlaylistHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };

    this.likePlaylist = this.likePlaylist.bind(this);
    this.unlikePlaylist = this.unlikePlaylist.bind(this);
    this.deletePlaylist = this.deletePlaylist.bind(this);
  }

  componentDidMount() {
    this.setState({ liked: this.props.playlist.isLiked })
  }

  componentDidUpdate(prevProps) {
    if (this.props.playlist !== prevProps.playlist) {
      this.setState({ liked: this.props.playlist.isLiked })
    }
  }

  likePlaylist() {
    this.props.likePlaylist(this.props.playlist.id).then(() => {
      this.setState({ liked: true });
    })
  }

  unlikePlaylist() {
    this.props.unlikePlaylist(this.props.playlist.id).then(() => {
      this.setState({ liked: false });
    })
  }

  deletePlaylist() {
    this.props.deletePlaylist(this.props.playlist.id).then(() => {
      this.props.history.push('/')
    })
  }

  // renderDropdown() {
  //   const { playlists } = this.props;
  //   let userPlaylists;
  //   let playlistItems;

  //   if (!playlists.length) {
  //     userPlaylists = null;
  //   } else {
  //     userPlaylists = playlists.filter(playlist => {
  //       return playlist.user_id === this.props.currentUserId
  //     });
  //     playlistItems = userPlaylists.map(playlist => {
  //       return (
  //         <li key={playlist.id}>
  //           <Link
  //             to={`/playlists/${playlist.id}`}
  //             className="dropdown-playlist-item"
  //           >
  //             {playlist.title}
  //           </Link>
  //         </li>
  //       )
  //     });
  //   }

  //   return (
  //     <ul className="playlist-dropdown">
  //       {playlistItems}
  //     </ul>
  //   )
  // }

  render() {
    const { playlist, currentUserId } = this.props;

    // const userLink = <Link
    //   className="ah-artist-link"
    //   to={`/user/${playlist.user_id}`}>
    //   {album.artist_name}
    // </Link>

    let toggleLike;
    if (this.state.liked) {
      toggleLike = (
        <button onClick={this.unlikePlaylist}>
          Unlike
        </button>
      )
    } else {
      toggleLike = (
        <button onClick={this.likePlaylist}>
          Like
        </button>
      )
    }

    let deleteButton;
    if (playlist.user_id === currentUserId) { 
      deleteButton = (
        <button onClick={ this.deletePlaylist }>
          Delete
        </button>
      )
    }
    else {
      deleteButton = null;
    }


    return (
      <div className="playlist-header">

        <img
          src={playlist.cover_url}
          width="200"
          height="200"
          className="ph-playlist-cover">
        </img>

        <div className="ph-other-info">
          <span className="ph-playlist-tag">Playlist</span>
          <span className="ph-playlist-title">{playlist.title}</span>
          <p>{playlist.description}</p>

          <span className="ph-other-info">
            <span className="ph-user">Created by {playlist.user_email} - </span>
            <span className="ph-song-count">{playlist.song_ids.length} Songs</span>
          </span>

          <PlayButton />
          {toggleLike}
          {deleteButton}
          <button onClick={ () => this.props.openModal('update')}>
            Update Playlist
          </button>
          {/* <div className="">
            {addToPlaylist}
            {this.renderDropdown()}
          </div> */}
        </div>
      </div>
    )
  }
}