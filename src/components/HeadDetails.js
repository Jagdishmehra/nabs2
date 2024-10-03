import React from 'react'
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { TbCircleNumber3Filled } from "react-icons/tb";
const HeadDetails = () => {
  return (
    <div className='mt-2 flex justify-evenly  bg-gray-200 shadow-sm rounded-t-lg'>
        <h2 className='flex items-center text-lg mt-4 text-center mx-14 mb-6 px-4'><TbCircleNumber1Filled className='mr-2 text-xl'/> Your Profile</h2>
    <h2 className="flex items-center text-lg mt-4 mx-14  text-center mb-6  "><TbCircleNumber2Filled className='mr-2 text-xl'/> Business Information</h2>
    <h2 className='flex items-center text-lg mt-4 text-center mb-6'><TbCircleNumber3Filled className='mr-2 text-xl'/> Additional Users</h2>
    </div>
  )
}

export default HeadDetails
