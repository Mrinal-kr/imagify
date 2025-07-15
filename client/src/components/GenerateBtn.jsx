import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateBtn = () => {

  const {user,setShowLogin}=useContext(AppContext)
  const navigate=useNavigate()

  const onClickHandler=()=>{
    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }

  return (
    <motion.div 
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className=' flex flex-col text-center items-center justify-between'>
      <h1 className='text-3xl font-semibold sm:text-4xl mb-2'>See the magic. Try now</h1>
      <button onClick={onClickHandler} className='sm:text-lg text-white bg-black w-auto mx-auto mt-8 px-12 py-2.5 rounded-full flex items-center gap-2 cursor-pointer'>
        Generate Images
        <img src={assets.star_icon} alt="" className='' />
      </button>
    </motion.div>
  )
}

export default GenerateBtn
