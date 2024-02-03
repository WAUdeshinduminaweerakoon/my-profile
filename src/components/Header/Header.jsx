import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const Header = () => {
  let Links = [
    { name: "home", link: "home" },
    { name: "profile-details", link: "profile-details" },
    { name: "skills", link: "skills" },
    { name: "myProject", link: "myProject" },
  ];

  return (
    <header className='fixed top-0 left-0 w-full shadow-md bg-violet-700'>
      <nav className='items-center justify-between py-4 md:flex md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-950'>
          Udesh Indumina
        </div>
        <div className='absolute text-3xl cursor-pointer right-8 top-6 md:hidden'>
          <span className><DensityMediumIcon /></span>
        </div>
        <ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-violet-700 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in'>
          {Links.map((link) => (
            <li key={link.name} className='text-xl md:ml-8 md:my-0 my-7'>
              <ScrollLink to={link.link} smooth={true} duration={500} className='duration-500 text-gray-950 hover:text-gray-700'>
                {link.name}
              </ScrollLink>
            </li>
          ))}
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
