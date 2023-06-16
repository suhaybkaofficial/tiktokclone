import Image from 'next/image'
import React from 'react'
import { BsSearch, BsFillSendFill } from "react-icons/bs"
import { AiOutlinePlus } from "react-icons/ai"
import { BiMessageAltMinus } from "react-icons/bi"
import { FaUserCircle } from "react-icons/fa"
function Navbar() {
    return (
        <>
        <div className='my-2'>
            {/* Nav  */}
            <div className='flex items-center justify-between'>
                {/* Logo */}
                <div>
                    <Image
                        src="/headerLogo.png"
                        width={140}
                        height={30}
                        alt="Picture of the author"
                    />
                </div>
                {/* Search */}
                <div className='py-2 px-2 rounded-full hidden  bg-primary md:flex items-center justify-between flex-1 max-w-xs lg:max-w-md'>
                    <input type="text" className='bg-primary flex-1 outline-0 ring-0 py-1 px-3 border-r border-third' placeholder='Search' />
                    <BsSearch className='text-third mx-3 hover:text-white cursor-pointer font-semibold' />
                </div>
                {/* More */}
                <div className='flex items-center'>
                    {/* Upload */}
                    <button className='py-1.5 px-3 bg-primary flex items-center font-semibold flex-1 mr-4 hover:bg-primary/25'>
                        <AiOutlinePlus className='mr-2' />
                        Upload
                    </button>
                    <div className='space-x-2 '>
                        <button className='px-2 py-1'>
                            <BsFillSendFill size={25} />
                        </button>
                        <button className='px-2 py-1'>
                            <BiMessageAltMinus size={25} />
                        </button>
                        <button className='px-2 py-1'>
                            <FaUserCircle  size={25}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <hr className='-mx-6 opacity-25' />
        </>
    )
}

export default Navbar