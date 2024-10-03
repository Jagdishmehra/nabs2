import React, { useState } from 'react';
import Header from './Header';
import HeadDetails from './HeadDetails';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function BusinessInformationForm({ handleNextStep, handlePreviousStep }) {
    
  return (
    <div className="absolute transition-transform scale-[.72] left-[20%] top-0 flex flex-col w-[60%] bottom-[100%] mx-auto  ">
        <Header/>
        <div><HeadDetails/></div>
      <div className=" bg-gray-100 px-[10%] py-8 rounded-b-lg shadow-xl w-full">
        
        <h2 className="text-sm text-gray-500 text-center mb-1">Step 2</h2>
        <h2 className="text-3xl text-center mb-1">Business Information</h2>
        <p className="text-center text-gray-700 mb-6">Please, enter information about your company.</p>
        
        <h3 className="text-lg font-semibold mb-2">GENERAL INFORMATION</h3>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Brand Name*</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Input Your Brand Name" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Brand Type*</label>
              <select className="mt-1 block w-full border border-gray-300 rounded-md p-2" required>
                <option>Select Type Of Your Brand</option>
                <option>Local</option>
                <option>National</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Street Address*</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Input Your Street Address" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">City*</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Input City" required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Zip Code*</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Input Zip Code" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tax ID Number*</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Input Tax ID Number" required />
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-2">DOCUMENTS</h3>
          <p className="mb-2">Once the following documents are signed, you'll be ready to get started:</p>
          <div className="mb-4">
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Electronically sign the agreement(s)" />
          </div>
          <div className="mb-4">
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Non-adult beverage Kroger market supplier waiver and release" />
          </div>

          <h3 className="text-lg font-semibold mb-2">COI PDF UPLOAD</h3>
          <p className="mb-2">Once the following documents are signed, you'll be ready to get started:</p>
          <div className="mb-4">

            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Electronically sign the agreement(s)" />
          </div> 
        </form>
      </div>
      <div className='flex justify-between mt-10'>
    <div className=" text-center">
      <a href="#" className="text-blue-500 flex items-center gap-2 cursor-pointer"><IoIosArrowBack/>Back to Login</a>
    </div>
    <div className='flex items-center gap-2'>
    <button onClick={handlePreviousStep}
    type="submit" className="mx-4 flex items-center gap-2 px-8 bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"><IoIosArrowBack/>Previous Step</button>
    <button onClick={handleNextStep}
    type="submit" className=" flex items-center gap-2 px-10 bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600">Next Step<IoIosArrowForward/></button>
    </div>
    
  </div>
    </div>
);
}

export default BusinessInformationForm;
