import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center align-bottom justify-between gap-4 py-3 mt-30'>
      <img src={assets.logo} alt="" width={150} />

      <p className='flex-1 border-l align-middle justify-between text-center border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
         Copyright @Imagify | All rights reserved. 
      </p>
      <div className='flex gap-2.5'>
        <img src={assets.facebook_icon} alt="" width={35}/>
        <img src={assets.twitter_icon} alt="" width={35}/>
        <img src={assets.instagram_icon} alt="" width={35}/>

      </div>
    </div>
  )
}

export default Footer
