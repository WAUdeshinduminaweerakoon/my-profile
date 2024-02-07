import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
  const MySkills=[
    {
      name:'Html5/CSS',
      percentage:'80',
      bgColor:'red'
    },
    {
      name:'Java',
      percentage:'60',
      bgColor:'blue'
    },
    {
      name:'JavaScript',
      percentage:'70',
      bgColor:'blue'
    },
    {
      name:'My SQL',
      percentage:'60',
      bgColor:'blue'
    },
    {
      name:'My SQL',
      percentage:'60',
      bgColor:'blue'
    },
    {
      name:'My SQL',
      percentage:'60',
      bgColor:'blue'
    },
    {
      name:'My SQL',
      percentage:'60',
      bgColor:'blue'
    },
  ];

  return (
    <section>
      <div className='text-center'>
        <br/><br/><br/>
        <h3 className='text-4xl font-semibold'>
          My<span className='text-cyan-200'> Skills</span>
        </h3>
        <p className='mt-2 text-2xl text-gray-100'>These are some of my skills that gain through my learning process</p>
      </div>

      <div className='max-w-4xl px-10 py-5 mx-auto mt-10 bg-gray-100 rounded-2xl'>
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


