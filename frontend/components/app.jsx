import React from "react";
import SplashContainer from './splash/splash_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'; 


const App = () => (
  <div>
    <h1 className="robotify-header">Robotify
      {/* <img src="/Users/eliraybon/app/robotify-assets/beat-bot.jpg" width="100" height="100"/> */}
    </h1>
    <Route exact path="/" component={SplashContainer} />
    <AuthRoute exact path="/signup" component={ SignupFormContainer } />
    <AuthRoute exact path="/login" component={ LoginFormContainer } />
  </div>
);

export default App;