import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

const Description = () => {
  return (
    <div>
      <motion.div
      initial={{opacity:0.2,y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className='flex flex-col w-full text-center mt-25 items-center justify-between p-6 md:px-28'>
        <h1 className='text-3xl font-semibold sm:text-4xl mb-2'>Create AI Images</h1>
        <p className=' text-stone-500 mb-4'>Turn your imagination into visuals</p>
      </motion.div>

      <div className='flex flex-col text-sm gap-3 md:gap-12 md:flex-row text-stone-600 items-center '>
        <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg'/>
        <div className='mr-25 sm:mr-10'>
            <h2 className='font-medium text-3xl max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
            <p className='mb-4 text-grey-600'>
                Experience the future of creativity with our AI-powered Text to Image Generator — a cutting-edge tool that transforms your words into stunning visuals. Simply input a description, and watch as the AI brings your imagination to life with detailed, high-quality images generated in seconds.
            </p>
            <p className='text-stone-600'>
                Built with advanced machine learning models, this tool understands context, style, and visual elements to deliver images that match your vision. Whether you're crafting content, designing concepts, or just exploring ideas, this generator offers a seamless way to turn text into art with incredible precision and ease.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Description
