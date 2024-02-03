

import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header class=' bg-violet-700'>
        <nav>
          <ul>
            <h1 className='text-3xl text-black'>Udesh Indumina </h1>
            <li><Link to="home">Home</Link></li>
            <li><Link to="profile-details">Profile Details</Link></li>
            <li><Link to="skills">Skills</Link></li>
            <li><Link to="myProject">My Project</Link></li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
