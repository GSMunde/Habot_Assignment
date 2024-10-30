import React from 'react';
import { BsArrowRight } from "react-icons/bs";

export default function ExploreSection() {
  return (
    <section className="py-16 text-center flex max-w-5xl space-x-4 w-full m-auto ">
      <div className='text-start'>
        <h2 className="text-4xl font-bold mb-5">
          Ready to dive into <span className="text-[#172554]">HABOT?</span>
        </h2>
        <p className="max-w-xl mx-auto mb-6 text-gray-700">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the first
          step towards realizing your entrepreneurial dreams.
        </p>
        <button className="btn btn-success mb-8 bg-[#1a9b4a] text-white cursor-pointer py-3 px-10 rounded-md font-bold flex">Sign up Today! <span className='ml-[20px] text-[29px]'><BsArrowRight /></span></button>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-[10px] h-[200px]">
        {['Abu Dhabi', 'Dubai', 'Sharjah & Ajman', 'Fujairah', 'Ras Al Khaimah', 'Umm Al Quwain'].map((city) => (
          <button key={city} className="border border-[#ff5200] m-[10px] h-[50px] w-[170px] rounded-md hover:bg-[#ff5200] hover:text-white transition duration-200">
            {city}
          </button>
        ))}
      </div>
    </section>
  );
}
