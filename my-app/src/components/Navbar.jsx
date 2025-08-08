import React from "react";
import { IoSearch } from "react-icons/io5";
import { RiShoppingCart2Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="w-full">
      {/* Upper Navbar */}
      <div className="bg-orange-500/70 py-3 px-6 sm:px-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-3 items-center">
          
          {/* Logo */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-extrabold uppercase text-black tracking-wide"
          >
            Swift Store
          </a>

          {/* Search */}
          <div className="relative group hidden sm:block justify-self-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-[200px] group-hover:w-[300px] transition-all duration-500 rounded-full border border-gray-300 px-10 py-2 focus:outline-none focus:border-orange-400 bg-white"
            />
            <IoSearch className="text-gray-500 group-hover:text-orange-500 absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-xl" />
          </div>

          {/* Cart Button */}
          <div className="justify-self-end">
            <button
              onClick={() => alert("Redirect to cart page (coming soon)")}
              className="bg-white hover:bg-orange-100 transition-all duration-300 text-orange-600 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm"
            >
              <RiShoppingCart2Fill className="text-2xl" />
              <span className="hidden sm:inline font-semibold">Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="bg-white py-3 shadow-sm px-6 sm:px-12 w-full">
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
