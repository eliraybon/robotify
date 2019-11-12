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
  //TESTING END

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store }/>, root);
});