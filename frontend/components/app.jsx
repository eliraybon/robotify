import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'; 

import Splash from './splash/splash_container';
import SignupForm from './session/signup_form_container';
import LoginForm from './session/login_form_container';
import Main from './main/Main';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Splash} />
      <AuthRoute exact path="/signup" component={SignupForm} />
      <AuthRoute exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/explore" component={Main} />
      <ProtectedRoute path="/library" component={Main} />
      <ProtectedRoute path="/albums" component={Main} />
      <ProtectedRoute path="/playlists" component={Main} />
      <ProtectedRoute path="/artists" component={Main} />
      <ProtectedRoute path="/search" component={Main} />
      <ProtectedRoute path="/browse" component={Main} />
      <ProtectedRoute path="/users" component={Main} />
    </Switch>
  </div>
);

export default App;