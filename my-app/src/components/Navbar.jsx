import React from "react";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="w-full">
      {/* Upper Navbar */}
      <div className="bg-orange-300/40 py-2 px-12 w-full">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center px-10 h-12">
          {/* Logo */}
          <a href="#" className="text-lg font-bold uppercase text-black">
            Apna Phone
          </a>

          {/* Search */}
          <div className="relative group hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-[200px] group-hover:w-[300px] transition-all duration-500 rounded-full border border-gray-300 px-10 py-1 focus:outline-none focus:border-orange-400 bg-white"
            />
            <IoSearch className="text-gray-500 group-hover:text-orange-500 absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none" />
          </div>
          {/* order button */}
          <button onClick={()=> alert("Ordering is not available")}>
            <span>Order</span>
          </button>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="bg-white py-3 shadow-sm px-12 w-full">
        <div className="max-w-[1280px] mx-auto flex justify-center items-center space-x-8">
          <a href="#" className="hover:text-orange-500 font-medium">
            Home
          </a>
          <a href="#" className="hover:text-orange-500 font-medium">
            Shop
          </a>
          <a href="#" className="hover:text-orange-500 font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
