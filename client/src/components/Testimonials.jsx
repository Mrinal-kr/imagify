import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import {motion} from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div 
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}

    className='flex flex-col text-center items-center justify-between p-6 my-15 py-12 '>
        <h1 className='text-3xl font-semibold sm:text-4xl mb-2'>Customer testimonials</h1>
        <p className=' text-gray-600 mb-12'>What Our Users Are Saying</p>
        <div className='flex flex-wrap gap-6 '>
            {testimonialsData.map((testimonial,index)=>(
                <div key={index} className=' bg-white/20 p-12 rounded-lg shadow-md order w-80 m-auto cursor-pointer hover:scale[1.02] transition-all'>
                    <div className='flex flex-col items-center justify-between'>
                        <img src={testimonial.image} alt="" className=' rounded-full w-14'/>
                        <h2 className='my-1 text-xl font-medium text-black/80'>{testimonial.name}</h2>
                        <p className='text-sm text-gray-600 font-medium'>{testimonial.role}</p>

                        <div className='flex my-4'>
                            {Array(testimonial.stars).fill().map((item,index)=>(
                                <img key={index} src={assets.rating_star} alt="" />
                            ))}
                        </div>
                        
                        <p className='text-gray-600 text-sm text-center'>{testimonial.text}</p>
                    </div>

                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Testimonials
