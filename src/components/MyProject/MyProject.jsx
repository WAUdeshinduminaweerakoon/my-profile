import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import project1 from '../../assets/images/poject1img.png'

import "swiper/css"
import "swiper/css/pagination"
import {Pagination, Autoplay} from 'swiper/modules'

const MyProject = () => {
  const projects=[
    {img:project1,
    name:"project Name",
    githubLink:'https://github.com/WAUdeshinduminaweerakoon/Profile-Web.git',
    live_link:"https://waudeshinduminaweerakoon.github.io/Profile-Web/"
    },
    {img:project1,
      name:"project Name",
      githubLink:'https://github.com/WAUdeshinduminaweerakoon/Profile-Web.git',
      live_link:"https://waudeshinduminaweerakoon.github.io/Profile-Web/"
    },
    {img:project1,
        name:"project Name",
        githubLink:'https://github.com/WAUdeshinduminaweerakoon/Profile-Web.git',
        live_link:"https://waudeshinduminaweerakoon.github.io/Profile-Web/"
    },
    {img:'',
    githubLink:'',
    live_link:""
    },
    {img:'',
    githubLink:'',
    live_link:""
    },
    {img:'',
    githubLink:'',
    live_link:""
    },
  ]
  return (
    <section className='px-3 py-10 text-white'>
      <br/><br/>
      <div className='text-center'>
        <h3 className='text-4xl font-semibold'>
          My<span className='text-cyan-200'> Project</span>
        </h3>
        <p className='mt-2 text-2xl text-gray-600'>My works</p>
      </div>
      <br /><br />
      <div className='relative flex items-center max-w-6xl px-5 mx-auto'>
        <div className='w-full lg:w-3/3'>
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >  
          {
            projects.map((projects,i)=>(
              <SwiperSlide key={i}>
              <div className='w-full p-4 h-fit bg-slate-400 rounded-2xl'>
                <img src={projects.img} alt='' className='rounded-lg' />
                <h3 className='my-4 text-xl'>{projects.name}</h3>
                <div className='flex gap-3'>
                  <a href={projects.githubLink} target='_blank' className='inline-block px-2 py-1 bg-gray-900 text-amber-200' rel="noreferrer">
                    Github
                  </a>
                  <a href={projects.live_link} target='_blank' className='inline-block px-2 py-1 bg-gray-900 text-amber-200' rel="noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
           </SwiperSlide>
            ))

          }
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MyProject;

