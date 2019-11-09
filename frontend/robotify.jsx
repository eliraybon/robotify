import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

// FOR TESTING
import { signup, login, logout } from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  //TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  //TESTING END

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store }/>, root);
});