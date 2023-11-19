import React from 'react'
import Filter from '../components/Filter'
import { AiTwotonePicture } from "react-icons/ai";
import { GiSpookyHouse } from "react-icons/gi";
import { MdPool } from "react-icons/md";
import { MdOutlineSurfing } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { RiHome2Line } from "react-icons/ri";
import { FaArrowUpFromGroundWater } from "react-icons/fa6";

const Filters = () => {
    const sorting = [
        { title: "Amazing view", icon: <AiTwotonePicture /> },
        { title: "Farms", icon: <GiSpookyHouse /> },
        { title: "Pools", icon: <MdPool /> },
        { title: "Surfing", icon: <MdOutlineSurfing /> },
        { title: "Trending", icon: <FaFire /> },
        { title: "Rooms", icon: <MdOutlineBedroomParent /> },
        { title: "Beachfront", icon: <FaUmbrellaBeach /> },
        { title: "Tiny home", icon: <RiHome2Line /> },
        { title: "!OMG", icon: <FaArrowUpFromGroundWater /> },

    ];
  return (
    <div className=' '>
        
        <div className='flex justify-start gap-3 sm:gap-4 mt-4'>
            {sorting.map((obj) => (
                <Filter title={obj.title} icon={obj.icon}/>
                
            ))}
        </div> 
    </div>
  )
};

export default Filters;