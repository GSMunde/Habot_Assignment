import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* <h1 className="text-2xl font-bold text-primary">HABOT</h1> */}
        <img width={'110px'} height={'70px'} src="https://s44506.pcdn.co/wp-content/uploads/2023/07/updated-trans-Habot-logo-png-e1690632849477-1024x229.png" alt="Habot" />
        <nav className="space-x-6 text-gray-700">
          <a href="/" className="hover:text-primary">Find Suppliers</a>
          <a href="/" className="hover:text-primary">Find Service Type</a>
          <button className="btn btn-outline-primary font-bold cursor-pointer py-2 px-4 rounded-md shadow border border-green-500 text-[#15803d]">Login / Sign Up</button>
        </nav>
      </div>
    </header>
  );
}
