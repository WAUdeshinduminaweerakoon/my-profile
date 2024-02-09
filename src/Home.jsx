
import React from 'react';
import Udesh from "./assets/images/Udesh.jpg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import EmailIcon from '@mui/icons-material/Email';

const Home = () => {
  const socialMedia = [
    { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/udesh-indumina'},
    { icon: <FacebookIcon />, link: 'https://www.facebook.com/udesh.wirakoon?mibextid=ZbWKwL' },
    // { icon: <GitHubIcon />, link: 'https://github.com' },
    // { icon: <EmailIcon />, link: 'udesh' },
  ];

  return (
    <section className='flex flex-col items-center min-h-screen py-10 md:flex-row'>
      <br/><br/>
      <div className='flex items-center justify-center flex-1 h-full'>
        <img src={Udesh} alt="" className='object-cover h-auto border-8 md:w-7/12 sm:w-6/12 sm:rounded-br-3xl sm:rounded-tl-3xl border-sky-500' />
      </div>
      <div className='flex-1'>
        <div className='text-center md:text-left'>
          <h1 className='text-2xl font-bold leading-10 text-white md:text-5xl md:leading-normal'>
            <span className='text-5xl text-yellow-400 md:text-6xl'>
              Hello!
              <br />
            </span>
            My Name is <span>Udesh Indumina</span>
          </h1>
          <h4 className='mt-4 text-lg font-bold leading-5 text-orange-400 md:text-2xl md:leading-normals'>Software Engineering Undergraduate</h4>
          {/* <button className='mt-8 btn-primary'>Contact Me</button> */}
          <h2 className='my-4 text-2xl text-gray-200 text-balance'>Contact Me</h2>
          <div className='flex items-center justify-center gap-10 mt-8 text-3xl md:justify-start'>
            {socialMedia.map(({ icon, link }) => (
               <a key={link} href={link} target='_blank' rel='noopener noreferrer' className='cursor-pointer text-slate-400 hover:text-white'>
               {icon}
             </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
