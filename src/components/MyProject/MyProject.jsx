import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"

const MyProject = () => {
  return (
    <section className='px-3 py-10 text-white '>
      <div className='text-center' >
        <h3 className='text-4xl font-semibold '>
          My<span className='text-cyan-200'> Projeect</span>
        </h3>
        <p className='mt-2 text-2xl text-gray-600 '>My works</p>
      </div>
      <br/><br/>
      <div className='relative flex items-center max-w-6xl px-5 mx-auto'>
        <div className='w-full lg:w-2/3'>
          <Swiper slidesPerview={1.2} spaceBetween={20}
          breakpoints={{

          }}>
            <SwiperSlide>
              <div className='w-full p-4 h-fit bg-slate-400 rounded-2xl'>
                <img src='' alt=''/>

              </div>

            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default MyProject
