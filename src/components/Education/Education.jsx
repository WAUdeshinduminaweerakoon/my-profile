import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
    const Education=[
        {
            date:"2021-Present",
            header:"Bsc(Hons) Software Engineering",
            institution:"University of Kelaniya ",
            detail:"Major in Net-Centric Application Development, Mobile Computing Application Development,Business Engineering",
        },
        {
            date:"2019",
            header:"GCE A/L-2019",
            institution:"Dodamgoda Miriswaththa National School",
            detail:" Combine Mathematics :- B, Physics :- C, Chemistry :- A",
        },
        {
            date:"2014",
            header:"GCE O/L -2014",
            institution:"Dodamgoda Miriswaththa National School",
            detail:"5As, 3Bs and 1Ss",
        },
    ];
  return (
    <section>
        <br/><br/><br/>
        <div className='text-center'>
            <h3 className='text-4xl font-semibold'>
                My<span className='text-cyan-200'> Educational Achievement</span>
            </h3>
            <br/><br/>
        </div>
        <div>
            <VerticalTimeline>
                {
                    Education.map((Education,i)=>(
                        <VerticalTimelineElement kiy={i}
                            iconStyle={{background:"#000",color:"#FFF"}}
                            icon={<SchoolIcon/>}
                            date={Education.date}
                            dateClassName='text-white text-3xl font-semibold'>
                                <h3 className='text-2xl font-semibold '>{Education.header}</h3>
                                <h4 className='text-lg font-semibold'>{Education.institution}</h4>
                                <p>{Education.detail}</p>
                        </VerticalTimelineElement>
                    ))
                }
            </VerticalTimeline>
        </div>
    </section>
  )
}

export default Education
