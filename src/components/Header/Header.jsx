import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Skills">Skills</Link></li>
     
    </header>
  );
};

export default Header;
