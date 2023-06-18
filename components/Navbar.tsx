"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsSearch, BsFillSendFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMessageAltMinus } from "react-icons/bi";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { signIn, signOut, useSession } from "next-auth/react";
function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!session) {
      signIn("google");
    }
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="my-2">
        {/* Nav  */}
        <div className="flex items-center justify-between">
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
          <div className="py-2 px-2 rounded-full hidden  bg-primary md:flex items-center justify-between flex-1 max-w-xs lg:max-w-md">
            <input
              type="text"
              className="bg-primary flex-1 outline-0 ring-0 py-1 px-3 border-r border-third"
              placeholder="Search"
            />
            <BsSearch className="text-third mx-3 hover:text-white cursor-pointer font-semibold" />
          </div>
          {/* More */}
          <div className="flex items-center">
            {/* Upload */}
            <button className="py-1.5 px-3 bg-primary flex items-center font-semibold flex-1 mr-4 hover:bg-primary/25">
              <AiOutlinePlus className="mr-2" />
              Upload
            </button>
            <div className="space-x-2 flex items-center ">
              <button className="px-2 py-1">
                <BsFillSendFill size={25} />
              </button>
              <button className="px-2 py-1">
                <BiMessageAltMinus size={25} />
              </button>
              <div className="relative ">
                <div
                  className="text-white font-semibold  rounded cursor-pointer"
                  onClick={toggleDropdown}
                >
                  {session ? (
                    <>
                      <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 rounded-full">
                        <Image
                          src={session?.user?.image || ""}
                          width={200}
                          height={200}
                          alt="Profile Picture"
                          className="rounded-full h-full w-full object-contain"
                        />
                      </div>
                      <p>{session?.user?.name.length > 8 ? session?.user?.name.substring(0, 8) + "..." : session?.user?.name}</p>
                      </div>
                    </>
                  ) : (
                    <p>Sign In</p>
                  )}
                </div>

                {isOpen && (
                  <div
                    className="absolute right-0 top-16
                    w-40 bg-gray-300 z-10 hover:bg-gray-100 rounded-md shadow-lg"
                    onMouseLeave={closeDropdown}
                  >
                    <div className="py-2">
                      {session ? (
                        <>
                          <button
                          disabled={status === "loading"}
                            onClick={()=>signOut()}
                            className=" px-4 py-2 text-gray-700   flex items-center w-full "
                          >
                             <FaSignOutAlt className="mr-2" />
                            Signout
                          </button>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="-mx-6 opacity-25" />
    </>
  );
}

export default Navbar;
