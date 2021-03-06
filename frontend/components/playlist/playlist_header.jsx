import React from 'react';
import { Link } from 'react-router-dom';
import PlayButton from '../ui/play_button';
import MenuButton from '../ui/menu_button';

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
      this.props.history.push('/explore')
    })
  }

  render() {
    const { playlist, currentUserId } = this.props;

    let toggleLike;
    if (this.state.liked) {
      toggleLike = (
        <img
          onClick={this.unlikePlaylist}
          className="like-unlike-heart liked"
          src="https://robotify-development.s3.amazonaws.com/header-liked-edit.png"
        />

      )
    } else {
      toggleLike = (
        <img
          onClick={this.likePlaylist}
          className="like-unlike-heart unliked"
          src="https://robotify-development.s3.amazonaws.com/header-unliked-edit.png"
        />
      )
    }
    let deleteButton;
    if (playlist.user_id === currentUserId) {
      deleteButton = (
        <button onClick={this.deletePlaylist}>
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
          className="ph-playlist-cover">
        </img>

        <div className="ph-other-info">
          <span className="ph-playlist-tag">Playlist</span>
          <span className="ph-playlist-title">{playlist.title}</span>
          <p className="ph-description">{playlist.description}</p>

          <span>
            <span className="ph-user">
              Created by <span className="ph-user-link">{playlist.user_email}</span>
            </span>
            <span> &middot; </span>
            <span className="ph-song-count">{playlist.song_ids.length} Songs</span>
          </span>

          <div className="buttons">
            <PlayButton />
            {toggleLike}
            <MenuButton playlist={playlist} type="playlist" />
          </div>
        </div>
      </div>
    )
  }
}