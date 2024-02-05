

import React from 'react';
import aboutImg from '../../assets/images/my photo.jpg';


const ProfileDetails = () => {
  const info =[
    {text:"Years experience", count:"01"},
    {text:"Completed Projects", count:"01"},
    {text:"Companies Work", count:"01"},
  ]
  return (
    <section className='py-10 text-white '>
      <div className='mt-8 text-center'>
        <h3 className='text-4xl font-semibold'>
          About <span className=' text-neutral-300'>Me</span>
        </h3>
        <p className='my-3 text-lg text-gray-300 '>My introduction</p><br/>
        <div className='flex flex-col-reverse items-center max-w-6xl gap-12 px-10 mx-auto md:flex-row md:gap-6'>
          <div className='p-2'>
            <div className='my-3 text-zinc-400'>
              <p className='w-11/12 mx-auto leading-7 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste et hic qui! Quas
                 incidunt beatae itaque aperiam doloremque consequatur molestiae!
                  Officia numquam earum molestiae eaque, magni atque mollitia ullam obcaecati.
              </p>
              <div className='flex items-center mt-10 gap-7'>
                {info.map((content)=>(
                  <div key={content.text}>
                    <h3 className='text-2xl font-semibold text-white md:text-4xl'>{content.count}<span>+</span>{" "}</h3>
                    <span className='text-xl text-slate-400 md:text-base'>{content.text}</span>
                  </div>
                ))}
              </div>
              <div>
                  <br/>
                  <a href='/My CV/Udesh Indumina CV.pdf' download>
                    <button className='btn-primary'>Download My CV</button>
                  </a>             
              </div>   
            </div>
          </div>
          <div className='flex justify-center flex-1 md:mt-0 mt-6items-center'>
            <div className='relative w-11/12 h-full max-w-sm md:w-60 lg:w-96 sm:w-10/12 -z-10 aboutImg'>
              <img src={aboutImg} alt='' className='object-cover w-full bg-cyan-600 rounded-3xl'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
