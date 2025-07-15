import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {
  return (
    <motion.div 
      initial={{opacity:0.2,y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
    
    className='flex-col flex items-center justify-center text-center my-30 '>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How it works</h1>
      <p className='text-stone-500 text-lg mb-8'>Transform words into stunning images</p>
      
      <div className='space-y-4 w-full max-w-3xl text-sm'>
        {stepsData.map((item,index)=>(
          <div key={index} className='bg-white/20 m-2 text-center flex px-8 p-4 rounded-lg gap-4 
          shadow-md border-0 cursor-pointer hover:scale-[1.02] transition-all duration-300'>
            <img width={40} src={item.icon} alt="" />
            <div>
              <h2 className='text-center text-xl font-medium'>{item.title}</h2>
              <p className='text-grey-500'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps
