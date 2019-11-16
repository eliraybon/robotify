import React from 'react';
import { connect } from 'react-redux';
import { 
  addSongToPlaylist
} from '../../util/playlist_song_api_util';
import { getUsersPlaylists } from '../../reducers/selectors';

class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = { open: false };

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick)
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(state => {
      return { open: !state.open };
    });
  }

  handleOutsideClick(e) {
    //if you prevent default, you can't click the inputs in the modal if a 
    //menu button is on the page
    // e.preventDefault();

    if (this.container.current && !this.container.current.contains(e.target)) {
      this.setState({ open: false });
    };
  }

  renderPlaylistItems() {
    const { playlists, addSongToPlaylist, songId } = this.props; 

    return playlists.map(playlist => {
      return <li
        className="dropdown-item"
        key={ playlist.id }
        onClick={ () => this.props.addSongToPlaylist({ song_id: songId, playlist_id: playlist.id })}
      >
        {playlist.title}
      </li>
    })
  }
  
  render() {

    return (
      <div className="menu-button-container" ref={ this.container }>
        <button className="menu-button" onClick={ this.handleClick }>
          ☰
        </button>
        {this.state.open && (
          <div className="dropdown-menu">
            <ul>
              {this.renderPlaylistItems()}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    //you need to make a selector to only grab the current user's playlists
    playlists: getUsersPlaylists(state)
  };
};

//we aren't actually dispatching an action here. Just making a background 
//POST request to the API

//I'm going to connect a ton of functions here so that I can this one button
//for songs, albums, and playlists...

const mapDipatchToProps = dispatch => {
  return {
    addSongToPlaylist: playlistAdd => addSongToPlaylist(playlistAdd)
  };
};

export default connect (
  mapStateToProps,
  mapDipatchToProps
)(MenuButton);
