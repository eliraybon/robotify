import React from 'react';
import { Link } from 'react-router-dom';

const RobotifyHeader = () => {
  return (
    <div className="robotify-header">

      <Link to="/" className="robotify-header-logo">
        <img
          src="https://robotify-development.s3.amazonaws.com/robotify.png"
          width="80"
          height="80"
        />
        <span className="robotify-header-text">Robotify</span>
        {/* Robotify */}
      </Link>
    </div>
  )
}

export default RobotifyHeader;