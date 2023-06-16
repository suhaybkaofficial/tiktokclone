import React from 'react'
import {AiFillHeart,AiFillMessage} from "react-icons/ai"
import {IoIosShareAlt} from "react-icons/io"
function Reactions() {
  return (
    <div className='flex flex-col space-y-5 pb-2'>
      {/* Reaction Buttons */}
      <div className='flex flex-col items-center space-y-1'>
      <button className='bg-primary hover:bg-primary/50 p-3 rounded-full'>
      <AiFillHeart  size={20}/>
      </button>
      <span className='text-xs font-semibold'>466.2K</span>
      </div>
      <div className='flex flex-col items-center space-y-1'>
      <button className='bg-primary hover:bg-primary/50 p-3 rounded-full'>
      <AiFillMessage  size={20}/>
      </button>
      <span className='text-xs font-semibold'>1189</span>
      </div>
      
      <div className='flex flex-col items-center space-y-1'>
      <button className='bg-primary hover:bg-primary/50 p-3 rounded-full'>
      <IoIosShareAlt  size={20}/>
      </button>
      <span className='text-xs font-semibold'>2683</span>
      </div>
    </div>
  )
}

export default Reactions