import React from 'react';
import { Link } from 'react-router-dom';
import PlayButton from '../ui/play_button';
import MenuButton from '../ui/menu_button';

export default class AlbumHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false, hover: false };

    this.likeAlbum = this.likeAlbum.bind(this);
    this.unlikeAlbum = this.unlikeAlbum.bind(this);
    this.hover = this.hover.bind(this);
    this.leave = this.leave.bind(this);
  }

  componentDidMount() {
    this.setState({ liked: this.props.album.isLiked });
  }

  componentDidUpdate(prevProps) {
    if (this.props.album !== prevProps.album) {
      this.setState({ liked: this.props.album.isLiked });
    }
  }

  likeAlbum() {
    this.props.likeAlbum(this.props.album.id).then(() => {
      this.setState({ liked: true });
    })
  }

  unlikeAlbum() {
    this.props.unlikeAlbum(this.props.album.id).then(() => {
      this.setState({ liked: false });
    })
  }

  hover() {
    this.setState({ hover: true });
  }

  leave() {
    this.setState({ hover: false });
  }

  render() {
    const { album } = this.props;
    const artistLink = <Link
      className="ah-artist-link"
      to={`/artists/${album.artist_id}`}>
      {album.artist_name}
    </Link>

    let toggleLike;
    if (this.state.liked) {
      toggleLike = (
        <img
          onClick={this.unlikeAlbum}
          className="like-unlike-heart liked"
          src="https://robotify-development.s3.amazonaws.com/header-liked-edit.png"
        />

      )
    } else {
      toggleLike = (
        <img
          onClick={this.likeAlbum}
          className="like-unlike-heart unliked"
          src="https://robotify-development.s3.amazonaws.com/header-unliked-edit.png"
        />
      )
    }

    return (
      <div className="album-header">

        <div className="ah-album-cover" onMouseEnter={this.hover} onMouseLeave={this.leave}>
          <img
            src={album.cover_url}
          />

          {this.state.hover && (
            <span className="ah-hover">
              <div className="ah-hover-play">

              </div>
            </span>
          )}
        </div>

        <div className="ah-meta-data">

          <span className="ah-album-tag">Album</span>
          <span className="ah-album-title">{album.title}</span>

          <span className="ah-artist-name">
            <span>By</span>
            {artistLink}
          </span>

          <span className="ah-other-info">
            <span className="ah-album-year">{album.year} &middot; </span>
            <span className="ah-song-count">{album.song_ids.length} Songs</span>
          </span>
          <div className="buttons">
            <PlayButton />
            {toggleLike}
            <MenuButton album={album} type="album" />
          </div>
        </div>
      </div>
    )
  }
}