import React from "react";
import SplashContainer from './splash/splash_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'; 


const App = () => (
  <div>
    <Route exact path="/" component={SplashContainer} />
    <h1 
      className="robotify-header">Robotify
    </h1>
    <AuthRoute exact path="/signup" component={ SignupFormContainer } />
    <AuthRoute exact path="/login" component={ LoginFormContainer } />
  </div>
);

export default App;