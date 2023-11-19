import React from "react";
import logo from '../assets/logo.jpg'
import { TbWorld } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
    <div className="border-b">
        {/* */}
        <div className="flex justify-between items-center  sm:mx-6 md:mx-10 lg:mx-12">
        {/* left */}
        <div className=" w-40 h-20 flex">
            <img src = {logo} className="object-cover"/>
        </div>

        {/* mid */}
        <div className="hidden lg:flex justify-center items-center relative shadow-sm shadow-gray-400 rounded-full">
            <input type="search" placeholder="" className="py-3 w-[20rem] rounded-full outline-0"/>
            <div className="flex justify-between absolute w-full pr-16 pl-6 font font-semibold text-gray-600">
                <button className="w-full">Anywhere</button>
                <button className=" border-l border-x px-6 ">Anyweek</button>
                <button className="w-full text-gray-400">Add guest</button>
            </div>
            <div className="bg-[#ff5a60] rounded-full p-2 mr-2">
                <FaSearch className="text-white"/>
            </div>
        </div>
        {/* right */}
        <div className="flex items-center pr-4 font-semibold text-gray-600">
            <p>Airbnb your home</p>
            <TbWorld className="mx-4"/>
            <div className="flex items-center gap-4 border p-2 rounded-full">
                <IoMenu/>
                <FaUser className="mr-2 bg-black text-white rounded-full px-1"/>
            </div>

        </div>
    </div>
    </div>
    );
};

export default Navbar;