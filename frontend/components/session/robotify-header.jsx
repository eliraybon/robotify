import React from 'react';
import { Link } from 'react-router-dom';

const RobotifyHeader = () => {
  return (
    <div className="robotify-header">
      <Link to="/" className="robotify-header-logo">Robotify</Link>
    </div>
  )
}

export default RobotifyHeader;