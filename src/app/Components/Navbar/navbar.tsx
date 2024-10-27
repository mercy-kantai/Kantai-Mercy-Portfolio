"use client";
import { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-900 shadow-md sticky top-0 z-50 ">
      <div className="">
        <div className="flex items-center justify-between h-20 ">
          
       
          <div className="flex-shrink-0 ml-[3%] mt-[2%] md:mt-[3%] md:mb-[3%]">
          <Image src="/images/logo.png" alt="logo" width={120} height={60} />
          </div>

          <div className="md:hidden mr-[5%] mt-[5%]">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <div className="hidden md:flex space-x-24 font-bold text-black mr-[5%] text-[20px] mt-[4%] md:mb-[3%] darker-grotesque" >
            <a href="#hero" className="text-white">Home</a>
            <a href="#about" className="text-white">About Me</a>
            <a href="#services" className="text-white">Courses</a>
            <a href="#history" className="text-white">Projects</a>
            <a href="#footer" className="text-white">Contact</a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md text-[20px] fixed inset-0 flex flex-col justify-center items-center space-y-5 z-50 darker-grotesque">
          <button 
            onClick={() => setIsOpen(false)} 
            className="absolute top-5 right-5 text-black focus:outline-none">
            <FaTimes size={24} />
          </button>

          <a href="#hero" className=" text-black">Home</a>
          <a href="#about" className="block text-black">About Me</a>
          <a href="#services" className="block text-black">Courses</a>
          <a href="#history" className="block text-black">Projects</a>
          <a href="#footer" className="block text-black">Contact</a>
        </div>
      )}
    </nav>
  );
}
