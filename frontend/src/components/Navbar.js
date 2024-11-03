import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-transparent fixed top-0 left-0 w-full z-10">
        <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-10 w-10" />
            <h1 className="text-2xl md:text-3xl font-bold text-[#C1B59B] ml-2" style={{ fontFamily: 'Arial, sans-serif' }}>JobNexus</h1>
        </div>
        <a href="#about" className="border border-grey-300 text-[#C1B59B] hover:bg-[#76ABAE] hover:text-black transition duration-300 px-3 py-1 rounded">
        About
    </a>
    </nav>


  );
};

export default Navbar;
