import React from 'react'
import {AiFillHome} from "react-icons/ai"
import {HiOutlineUsers} from "react-icons/hi"
import {MdExplore} from "react-icons/md"
import {FaVideo} from "react-icons/fa"
function LeftSidebar() {
  return (
    <>
    <div className='my-4 border-r border-white/25 min-h-screen h-full'>
        {/* Left Sidebar */}
        <div className='flex flex-col  space-y-5'>
            <button className='flex items-center text-secondary hover:bg-primary/20 py-3 px-10 text-lg font-semibold'>
                <AiFillHome className='mr-2' size={22} />
                <span className='hidden lg:block'>For You</span>
            </button>

            <button className='flex items-center text-white hover:text-secondary hover:bg-primary/20 py-3 px-10 text-lg font-semibold'>
                <HiOutlineUsers className='mr-2' size={22} />
               <span className='hidden lg:block'>Following</span>
            </button>
            <button className='flex items-center text-white hover:text-secondary hover:bg-primary/20 py-3 px-10 text-lg font-semibold'>
                <MdExplore className='mr-2' size={22} />
                <span className='hidden lg:block'>Explore</span>
            </button>
            <button className='flex items-center text-white hover:text-secondary hover:bg-primary/20 py-3 px-10 text-lg font-semibold'>
                <FaVideo className='mr-2' size={22} />
                <span className='hidden lg:block'>LIVE</span>
            </button>
        </div>
    </div>
     </>
  )
}

export default LeftSidebar