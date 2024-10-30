import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-[#082f49] text-white text-center flex m-auto space-x-5 item-center justify-evenly py-8 ">
        <div className="mb-4">
          <img width={'110px'} height={'70px'} style={{backgroundColor: 'white'}} src="https://s44506.pcdn.co/wp-content/uploads/2023/07/updated-trans-Habot-logo-png-e1690632849477-1024x229.png" alt="Habot" />
          <p className='m-[10px]'>© R Singhania</p>
        </div>
        <div className="leading-7 justify-center space-x-4 mb-4">
          <ul>
            <h2 className='font-bold'>Company</h2>
            <p>About Us</p>
            <p>FAQ</p>
          </ul>
        </div>


        <div className="leading-7 justify-center space-x-4 mb-4">
          <ul>
            <h2 className='font-bold'>Terms</h2>
            <p>Data privacy</p>
            <p>Terms</p>
            <p>Accessibility</p>
          </ul>
        </div>


        <div className="leading-7 justify-center space-x-4 mb-4">
          <ul>
            <h2 className='font-bold'>Related</h2>
            <p>Find Buyer</p>
            <p>Feedback</p>
          </ul>
        </div>


        <div className="flex justify-center space-x-4">
          <a href="/" className="hover:underline"><FaLinkedin /></a>
          <a href="/" className="hover:underline"><FaSquareXTwitter /></a>
          <a href="/" className="hover:underline"><FaFacebookSquare /></a>
          <a href="/" className="hover:underline"><FaInstagramSquare /></a>
        </div>
    </footer>
  );
}
