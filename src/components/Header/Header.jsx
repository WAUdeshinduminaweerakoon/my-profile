

import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <h1>Your App Name</h1>
            <li><Link to="profile-details" smooth={true} duration={500}>Profile Details</Link></li>
            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
