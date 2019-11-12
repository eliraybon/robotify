import React from 'react';
import { Link } from 'react-router-dom';

const SessionHeader = (props) => {
  return (
    <div className="robotify-header">
      <Link to="/" className="robotify-header-logo">Robotify</Link>
    </div>
  )
}

export default SessionHeader;