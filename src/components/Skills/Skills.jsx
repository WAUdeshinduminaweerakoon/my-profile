import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
  const MySkills=[
    {
      name:'Html5/CSS',
      percentage:'80',
      bgColor:'#821111'
    },
    {
      name:'Java',
      percentage:'60',
      bgColor:'#f72dfe'
    },
    {
      name:'JavaScript',
      percentage:'70',
      bgColor:'#1d4ed8'
    },
    {
      name:'C',
      percentage:'70',
      bgColor:'#d628bc'
    },
    {
      name:'React Js',
      percentage:'65',
      bgColor:'#7c3aed'
    },
    {
      name:'My SQL',
      percentage:'60',
      bgColor:'#0f8c3d'
    },
    {
      name:'MongoDB',
      percentage:'30',
      bgColor:'#eab308'
    },
  ];

  return (
    <section className='px-6'>
      <div className='text-center'>
        <br/><br/><br/>
        <h3 className='text-4xl font-semibol text-zinc-100'>
          My<span className='text-red-300 '> Skills</span>
        </h3>
        <p className='mt-2 text-2xl text-gray-100'>These are some of my skills that gain through my learning process</p>
      </div>

      <div className='max-w-4xl px-10 py-5 mx-auto mt-10 bg-gray-100 rounded-3xl sm:px-6 sm:py-6'>
        {MySkills.map((MySkill, i) => (
          <div key={i} className='mb-1'>
            <p className='text-lg font-semibold text-gray-800 '>{MySkill.name}</p>
            <div className="w-full"> 
              <ProgressBar 
                completed={MySkill.percentage} 
                bgColor={MySkill.bgColor} 
                animateOnRender={true}
                customLabel={MySkill.name}
              />
            </div>  
          </div>
        ))}
      </div>     
    </section>
  );
};

export default Skills;


