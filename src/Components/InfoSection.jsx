import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

export default function InfoSection() {
  return (
    <section className="bg-[#0e1b47] w-[90%] rounded-md m-auto w-full text-white py-16">
      <div className="container mx-auto flex justify-around">
        <div className="relative rounded-md w-full max-w-lg mx-auto mb-8 ml-[40px]">
          <img width="100%" height="315" src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkyku647GLr51fd3hmM8_vWIRMPuSFe7bdJNhoTr60zsMJyEVT' alt="" />
        </div>
        <div className="flex space-x-16 ml-[20px]">
          <div className="text-xl text-start text-wrap	text-center ">
            <div className='flex justify-normal gap-20'>
              <h3 className="font-bold mb-[30px] text-[25px] " ><span className='border-b-[2px] border-[#ff5200] text-[#ff5200]'>Buyer</span></h3>
              <h3 className="font-bold text-[25px] ">Supplier</h3>
            </div>
            <ul>
              <li className='flex'><span><FaCheckCircle className='text-[#15803d] mr-[10px] mt-[5px]'/></span>Post your requirements</li>
              <li className='flex'><span><FaCheckCircle className='text-[#15803d] mr-[10px] mt-[5px]'/></span>Sit back for multiple suppliers to contact you.</li>
              <li className='flex'><span><FaCheckCircle className='text-[#15803d] mr-[10px] mt-[5px]'/></span>Choose among the suppliers based on the ratings and reviews.</li>
            </ul> 
          </div>
        </div>
      </div>
    </section>
  );
}
