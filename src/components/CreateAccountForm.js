import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import HeadDetails from './HeadDetails';
import BodyDetails from './BodyDetails';
import Header from './Header';

function CreateAccountForm({ handleNextStep }) {
  return (
    <div className='transition-transform scale-[.9] absolute top-0 left-0 w-full h-full'>
      <Header/>               
      <div className='w-[60%] mx-auto'><HeadDetails/></div>
      <div className="flex bg-gray-100 w-[60%] mx-auto rounded-b-lg">
        <div className="p-8 rounded-b-lg shadow-xl w-[100%] h-[80%]">
          <div className='flex justify-center '>
              <BodyDetails/>
          </div>
          <form onSubmit={(e)=>e.preventDefault()}
        className='px-10 flex justify-evenly gap-4'>
            
            <div className='flex flex-col w-full'>
                <div className="mb-4 w-full">
            <label className="block text-sm font-medium text-gray-700">First Name*</label>
            <input type="text" className="mt-1  block w-full border border-gray-300 rounded-md p-2" placeholder="Input Your First Name" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email*</label>
            <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Input Your Email" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password*</label>
            <input type="password" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Create Password" required />
          </div>
          </div>
          <div className='flex flex-col w-full'>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Last Name*</label>
            <input type="text" className="mt-1  block w-full border border-gray-300 rounded-md p-2" placeholder="Input Your Last Name" required />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone Number*</label>
            <input type="tel" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Input Your Phone Number" required />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Confirm Password*</label>
            <input type="password" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Confirm Your Password" required />
          </div></div></form>
        </div>
      </div>
      <div className='flex justify-between mt-10'>
        <div className="mx-6 text-center">
          <button className="text-blue-500 flex items-center gap-2 cursor-pointer"><IoIosArrowBack/>Back to Login</button>
        </div>
        <button onClick={handleNextStep} className="mx-6 flex items-center gap-2 px-10 bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600">Next Step<IoIosArrowForward/></button>
      </div>
    </div>
  );
}

export default CreateAccountForm;
