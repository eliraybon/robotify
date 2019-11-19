import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { likeSong, unlikeSong } from '../../actions/song_actions';
import { likeAlbum, unlikeAlbum } from '../../actions/album_actions';
import { likePlaylist, unlikePlaylist, deletePlaylist } from '../../actions/playlist_actions';
import { 
  // addSongToPlaylist,
  addAlbumToPlaylist
} from '../../util/playlist_song_api_util';
import { getUsersPlaylists } from '../../reducers/selectors';
import { addToQueue } from '../../actions/music_actions';
import { openModal } from '../../actions/modal_actions';
import { addSongToPlaylist, removeSongFromPlaylist } from '../../actions/playlist_song_actions';

class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();

    this.state = { open: false, playlistHover: false };

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.openPlaylistHover = this.openPlaylistHover.bind(this);
    this.closePlaylistHover = this.closePlaylistHover.bind(this);
    this.deletePlaylist = this.deletePlaylist.bind(this);
    this.likeSong = this.likeSong.bind(this);
    this.unlikeSong = this.unlikeSong.bind(this);
    this.addToQueue = this.addToQueue.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick);
  }

  handleClick(e) {
    e.preventDefault();
    this.closePlaylistHover();
    this.setState(state => {
      return { open: !state.open };
    });
  }

  handleOutsideClick(e) {
    //if you prevent default, you can't click the inputs in the modal if a 
    //menu button is on the page
    // e.preventDefault();

    //i actually want everything to close if I click on an option 
    if (this.container.current && !this.container.current.contains(e.target)) {
      this.setState({ open: false });
    };
  }

  openPlaylistHover() {
    this.setState(state => {
      return { playlistHover: true};
    });
  }

  closePlaylistHover() {
    this.setState(state => {
      return { playlistHover: false };
    });
  }

  renderPlaylistItems(type) {
    const { playlists, addSongToPlaylist, songId } = this.props; 

    return playlists.map(playlist => {
      // const green = (playlist.song_ids.includes(this.props.song.id)) ? 'green' : '';

      let green; 
      let action;
      switch(type){
        case 'song':
          green = (playlist.song_ids.includes(this.props.song.id)) ? 'green' : '';
          action = () => {
            this.props.addSongToPlaylist({ song_id: songId, playlist_id: playlist.id })
              .then(() => this.props.closeAll())
          };
          break;
        case 'album':
          green = (this.props.album.song_ids.every(id => playlist.song_ids.includes(id))) ? 'green' : '';
          action = () => this.props.addAlbumToPlaylist(this.props.album, playlist.id)
          break;
        default: 
          green = "";
          break;
      }
      return <li
        className={`dropdown-item ${green}`}
        key={ playlist.id }
        onClick={ action }
      >
        {playlist.title}
      </li>
    })
  }

  unlikeSong(songId) {
    this.props.unlikeSong(songId).then(() => this.props.closeAll());
  }

  likeSong(songId) {
    this.props.likeSong(songId).then(() => this.props.closeAll());
  }

  addToQueue(songs) {
    this.props.addToQueue(songs);
    this.props.closeAll();
    this.setState({ open: false })
  }

  renderSongButton() {
    const { song } = this.props;

    let toggleLike;
    if (song.isLiked) {
      toggleLike = <li onClick={() => this.unlikeSong(song.id)} onMouseEnter={this.closePlaylistHover}>Unlike Song</li>
    } else {
      toggleLike = <li onClick={() => this.likeSong(song.id)} onMouseEnter={this.closePlaylistHover}>Like Song</li>
    }

    return (
      <div className="song-button">

        <ul>
          <li onClick={() => this.addToQueue([song])} onMouseEnter={this.closePlaylistHover}>
            Add to Queue
          </li>

          <li onMouseEnter={this.closePlaylistHover}>
            <Link to={`/artists/${song.artist_id}`}>Go to Artist</Link>
          </li>

          <li onMouseEnter={this.closePlaylistHover}>
            <Link to={`/albums/${song.album_id}`}>Go to Album</Link>
          </li>

          {toggleLike}

          <li onMouseEnter={this.openPlaylistHover}>
            Add to Playlist
            {this.state.playlistHover && (
              <div className="playlist-dropdown">
                <ul>
                  {this.renderPlaylistItems('song')}
                </ul>
              </div>
            )}
          </li>

          {(this.props.match.path === "/playlists/:playlistId") && (
            <li 
              onClick={() => this.props.removeSongFromPlaylist(song.id, this.props.match.params.playlistId)}
              onMouseEnter={this.closePlaylistHover}
            >
              Remove from Playlist
            </li>
          )}
        </ul>
      </div>
    )
  }

  renderAlbumButton() {
    const { album } = this.props;

    let toggleLike;
    if (album.isLiked) {
      toggleLike = <li onClick={() => this.props.unlikeAlbum(album.id)} onMouseEnter={this.closePlaylistHover}>Unlike Album</li>
    } else {
      toggleLike = <li onClick={() => this.props.likeAlbum(album.id)} onMouseEnter={this.closePlaylistHover}>Like Album</li>
    }

    return (
      <div className="album-button">
        <ul>
          <li onClick={() => this.props.addToQueue(this.props.songs)} onMouseEnter={this.closePlaylistHover}>
            Add to Queue
          </li>

          <li onMouseEnter={this.closePlaylistHover}>
            <Link to={`/artists/${album.artist_id}`}>Go to Artist</Link>
          </li>

          {toggleLike}

          <li onMouseEnter={this.openPlaylistHover}>
            Add to Playlist
            {this.state.playlistHover && (
              <div className="playlist-dropdown">
                <ul>
                  {this.renderPlaylistItems('album')}
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    )
  }

  deletePlaylist() {
    this.props.deletePlaylist(this.props.playlist.id).then(() => {
      this.props.history.push('/')
    });
  }

  renderPlaylistButton() {
    const { playlist } = this.props;

    let toggleLike;
    if (playlist.isLiked) {
      toggleLike = <li onClick={() => this.props.unlikePlaylist(playlist.id)} onMouseEnter={this.closePlaylistHover}>Unlike Playlist</li>
    } else {
      toggleLike = <li onClick={() => this.props.likePlaylist(playlist.id)} onMouseEnter={this.closePlaylistHover}>Like Playlist</li>
    }

    return (
      <div className="playlist-button">
        <ul>
          {this.props.currentUserId === playlist.user_id && (
            <li onClick={() => this.props.openModal({type: 'update', wildCard: playlist.id})}>  
              Edit Playlist Details
            </li>
          )}

          {this.props.currentUserId === playlist.user_id && (
            <li onClick={this.deletePlaylist}>
              Delete
            </li>
          )}

          <li onClick={() => this.props.addToQueue(this.props.songs)} onMouseEnter={this.closePlaylistHover}>
            Add to Queue
          </li>

          {toggleLike}
        </ul>
      </div>
    )
  }
  
  render() {
    let button;
    let src;
    let width;
    let height;
    switch(this.props.type) {
      case 'song':
        button = this.renderSongButton();
        src = "https://robotify-development.s3.amazonaws.com/sii-dots.png";
        width = "16px";
        height = "4px";
        break;
      case 'album':
        button =  this.renderAlbumButton();
        src = "https://robotify-development.s3.amazonaws.com/header-menu-edit.png";
        width = "30px";
        height = "30px";
        break
      case 'playlist':
        button = this.renderPlaylistButton();
        src = "https://robotify-development.s3.amazonaws.com/header-menu-edit.png";
        width = "30px";
        height = "30px";
        break;
    }

    let id;
    let klass = "";
    if (this.props.type === 'song') {
      id="triple-dots";
      klass = 'song-dropdown';
    }

    return (
      <div className="menu-button-container" ref={ this.container }>
        {/* <button className="menu-button" onClick={ this.handleClick }>
          ☰
        </button> */}
        <img 
          src={src}
          onClick={this.handleClick}
          width={width}
          height={height}
          id={id}
        />
        {this.state.open && (
          <div className={`dropdown-menu ${klass}`}>
            {button}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    //you need to make a selector to only grab the current user's playlists
    playlists: getUsersPlaylists(state),
    //songs if for adding an album or playlist to queue. you need to add all the songs
    songs: Object.values(state.entities.songs),
    currentUserId: state.session.currentUserId
  };
};

//when adding to playlist we aren't actually dispatching an action. Just making a background 
//POST request to the API

//I'm going to connect a ton of functions here so that I can this one button
//for songs, albums, and playlists...

const mapDipatchToProps = dispatch => {
  return {
    // addSongToPlaylist: playlistAdd => addSongToPlaylist(playlistAdd),
    addSongToPlaylist: playlistAdd => dispatch(addSongToPlaylist(playlistAdd)),
    removeSongFromPlaylist: (songId, playlistId) => dispatch(removeSongFromPlaylist(songId, playlistId)),
    addAlbumToPlaylist: (album, playlistId) => addAlbumToPlaylist(album, playlistId),
    addToQueue: queue => dispatch(addToQueue(queue)),
    likeSong: songId => dispatch(likeSong(songId)),
    unlikeSong: songId => dispatch(unlikeSong(songId)),
    likeAlbum: albumId => dispatch(likeAlbum(albumId)),
    unlikeAlbum: albumId => dispatch(unlikeAlbum(albumId)),
    likePlaylist: playlistId => dispatch(likePlaylist(playlistId)),
    unlikePlaylist: playlistId => dispatch(unlikePlaylist(playlistId)),
    deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId)),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default withRouter(connect (
  mapStateToProps,
  mapDipatchToProps
)(MenuButton));
