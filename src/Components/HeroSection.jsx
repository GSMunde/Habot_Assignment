import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { BsBriefcaseFill } from "react-icons/bs";

export default function HeroSection() {
  return (
    <section className="relative bg-cover bg-center h-[500px] " style={{ backgroundImage: `url('https://img.freepik.com/free-photo/dubai-skyline-wallpaper_1409-6486.jpg')` }}>
      <div className="flex flex-col items-center justify-center text-center text-white h-full bg-opacity-60 bg-darkBlue ">
        <h1 className="text-5xl font-bold mb-4">Are You a Supplier?</h1>
        <h1 className="text-5xl mb-4">Explore Matching Opportunities.</h1>
        <div className="flex max-w-2xl space-x-4 w-full m-[20px]">
            <div className="flex bg-white w-full rounded-md h-[50px] w-[1000px]">
                <BsBriefcaseFill  className='text-[#ff5200] m-[8px] mt-[17px] ml-[12px]' />
                <input type="text" className=" w-[85%] " placeholder="Search your required service here" />
            </div>
            <div className="flex bg-white w-full rounded-md h-[50px] w-[1000px]">
                <FaLocationDot className='text-[#ff5200] m-[8px] mt-[17px] ml-[10px]' />
                <input type="text" className='w-[85%]'  placeholder="Search your desired location here" />
            </div>
            <button className="btn btn-success bg-[#15803d] cursor-pointer py-1 px-5 rounded-md font-bold">Search</button>
        </div>
        <p className="mt-4 text-lg"><span className="font-bold">Are you a buyer? </span><a href="/" className="underline">Click here if you are looking to post a requirement</a></p>
      </div>
    </section>
  );
}
//max-w-2xl space-x-4px]