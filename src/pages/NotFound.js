import React from "react";
import "../styles/pages/NotFound.scss";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="NotFound">
      <div>
        <h2>404 Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Home Page</Link>
      </div>
    </div>
  );
};

export default NotFound;
