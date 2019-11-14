import React from 'react';
import { Link } from 'react-router-dom';
import PlayButton from '../ui/play_button';

export default class PlaylistHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };

    this.likePlaylist = this.likePlaylist.bind(this);
    this.unlikePlaylist = this.unlikePlaylist.bind(this);
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

  render() {
    const { playlist } = this.props;
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
        </div>
      </div>
    )
  }
}