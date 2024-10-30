import React from 'react';
import { RiUserAddFill } from "react-icons/ri";
import { BsClipboardPlusFill } from "react-icons/bs";
import { RiFileSearchFill } from "react-icons/ri";
import { FaFilePen } from "react-icons/fa6";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa6";



export default function HowItWorksSection() {
  return (
    <section className="py-17 text-center mt-[50px] mb-[40px]">
      <h2 className="text-3xl font-bold mb-8">How it works?</h2>
      <p className='w-[70%] m-auto text-center item-center mb-[40px]'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with
      potential buyers, and build successful business relationships, sharing valuable feedback.</p>
      <div className="flex flex-wrap justify-center max-w-4xl mx-auto">
        <p className="bg-white p-7 w-60 bg-[#beeff3]"> <span>  <RiUserAddFill  className='text-[40px] mb-[10px] m-auto text-center item-center'/></span>Select Your Role and Sign Up</p>
        <p className="bg-white p-7 w-60"> <span>  <BsClipboardPlusFill className='text-[40px] mb-[10px] m-auto text-center item-center'/></span>Buyers Post Your Requirements</p>
        <p className="bg-white p-7 w-60 bg-[#beeff3]"> <span>  <RiFileSearchFill className='text-[40px] mb-[10px] m-auto text-center item-center'/></span>Review, Select, and Contact the Best Suppliers</p>
        <p className="bg-white p-7 w-60"> <span>  <FaFilePen className='text-[40px] mb-[10px] m-auto text-center item-center'/></span>Suppliers Complete Profile and Get Notified</p>
        <p className="bg-white p-7 w-60 bg-[#beeff3]"> <span>  <RiContactsBook3Fill className='text-[40px] mb-[10px] m-auto text-center item-center'/></span>Contact to Buyers and Share Your Quote</p>
        <p className="bg-white p-7 w-60"> <span>  <FaRegHandshake className='text-[40px] mb-[10px] m-auto text-center item-center'/> </span>Connect and Leave Feedback</p>
      </div>
    </section>
  );
}
