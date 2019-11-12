import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

// FOR TESTING
import { signup, login, logout } from './actions/session_actions';
import { fetchAlbum } from './actions/album_actions';
import { 
  fetchPlaylist, 
  createPlaylist, 
  updatePlaylist, 
  deletePlaylist 
} from './actions/playlist_actions';
import { deleteSongFromPlaylist } from './util/playlist_song_util';
import { addSongToPlaylist } from './actions/playlist_song_actions';
import { likeSong, unlikeSong } from './util/song_api_util';
import { likeAlbum, unlikeAlbum } from './util/album_api_util';
import { likePlaylist, unlikePlaylist } from './util/playlist_api_util';
import { followArtist, unfollowArtist } from './util/artist_api_util';
import { followUser, unfollowUser } from './util/user_api_util';
//


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.fetchAlbum = fetchAlbum;
  window.fetchPlaylist = fetchPlaylist;
  window.createPlaylist = createPlaylist;
  window.updatePlaylist = updatePlaylist;
  window.deletePlaylist = deletePlaylist;
  window.addSongToPlaylist = addSongToPlaylist;
  window.deleteSongFromPlaylist = deleteSongFromPlaylist;
  window.likeSong = likeSong;
  window.unlikeSong = unlikeSong;
  window.likeAlbum = likeAlbum;
  window.unlikeAlbum = unlikeAlbum;
  window.likePlaylist = likePlaylist;
  window.unlikePlaylist = unlikePlaylist;
  window.followArtist = followArtist;
  window.unfollowArtist = unfollowArtist;
  window.followUser = followUser;
  window.unfollowUser = unfollowUser;
  //TESTING END

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store }/>, root);
});