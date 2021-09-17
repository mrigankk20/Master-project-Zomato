import React from "react";
import { ImUser } from "react-icons/im";
import { ImLocation2 } from "react-icons/im";
import {BiCameraMovie} from "react-icons/bi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { HiSearch } from "react-icons/hi";


const MobileNav = () => {
  return (
    <div className="flex w-full items-center justify-between lg:hidden">
      <div className="w-12">
        <img src="data:image/png;base64,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"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="bg-zomato-400 text-white px-3 py-2 rounded-full">
          Use App
        </button>
        <span className="border p-2 border-red-500 text-zomato-400 rounded-full">
          <ImUser />
        </span>
      </div>
    </div>

  );
};


const LargeNav = () => {
  return (
    <>
      <div className="hidden lg:inline container px-20 mx-auto">
        <div className="hidden gap-4 w-full items-center justify-around lg:flex ">
          <div className="w-28">
            <img src="data:image/png;base64,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"
              alt="logo"
              className="w-20 h-20"
            />
          </div>
          <div className="w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-grey-200 rounded">
            <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
              <span className="text-zomato-400">
                <ImLocation2 />
              </span>
              <input type="text" placeholder="Gurugram" className="w-full focus:outline-none" />
              <IoMdArrowDropdown />
            </div>
            <div className="flex w-full items-center gap-2">
              <HiSearch />
              <input type="search" placeholder="Search for restaurant, cuisine and a dish"
                className="w-full focus:outline-none" />
            </div>
          </div>
          <div className="ml-20 flex gap-4"> 
            <button className="text-grey-500 text-xl hover:text-grey-800">Login</button>
            <BiCameraMovie/>
            <button className="text-grey-500 text-xl hover:text-grey-800">Signup</button>
          </div>
        </div>
      </div>
    </>
  );

};






const Navbar = () => {
  return (
    <>
      <nav className="p-4 flex  bg-white shadow-md w-full items-center">
        <MobileNav />
        <LargeNav />
      </nav>
    </>
  );
};

export default Navbar;