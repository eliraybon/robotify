import React from "react";
import SplashContainer from './splash/splash_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'; 


const App = () => (
  <div>
    <h1>Robotify</h1>
    <Route exact path="/" component={SplashContainer} />
    <AuthRoute exact path="/signup" component={ SignupFormContainer } />
    <AuthRoute exact path="/login" component={ LoginFormContainer } />
  </div>
);

export default App;