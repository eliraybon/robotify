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

  render() {
    const { playlist, currentUserId } = this.props;

    let toggleLike;
    if (this.state.liked) {
      toggleLike = (
        <img
          onClick={this.unlikePlaylist}
          className="unliked"
          width="30px"
          height="30px"
          src="https://robotify-development.s3.amazonaws.com/unlike.png"
        />

      )
    } else {
      toggleLike = (
        <img
          onClick={this.likePlaylist}
          className="liked"
          width="30px"
          height="30px"
          src="https://robotify-development.s3.amazonaws.com/like.png"
        />
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

          <div className="buttons">
            <PlayButton />
            {toggleLike}
          </div>
          
          {deleteButton}
          <button onClick={ () => {
            this.props.openModal({type: 'update', wildCard: playlist.id})
            }}>
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