import React from "react";
import SplashContainer from './splash/splash_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import AlbumShow from './album/album_show_container';
import PlaylistShow from './playlist/playlist_show_container';
import ArtistShow from './artist/artist_show_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'; 
import RobotifyHeader from './session/robotify-header';
import Main from './main/Main';




const App = () => (
  <div>
    <Route exact path="/" component={ SplashContainer } />
    <AuthRoute exact path="/signup" component={ RobotifyHeader } />
    <AuthRoute exact path="/login" component={ RobotifyHeader } />
    <AuthRoute exact path="/signup" component={ SignupFormContainer } />
    <AuthRoute exact path="/login" component={ LoginFormContainer } />
    {/* <ProtectedRoute path="/albums" component={ Main } /> */}
    <Route path="/albums/:albumId" component={AlbumShow} />
    <Route path="/playlists/:playlistId" component={PlaylistShow} />
    <Route path="/artists/:artistId" component={ArtistShow} />
  </div>
);

export default App;