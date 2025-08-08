import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom"; // <-- Ensure React Router is set up

const Navbar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    alert("Searching for: " + query);
    setQuery("");
  };

  return (
    <nav className="w-full">
      {/* Upper Navbar */}
      <div className="bg-orange-500/70 py-3 px-6 sm:px-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-3 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl sm:text-2xl font-extrabold uppercase text-black tracking-wide"
          >
            Swift Store
          </Link>

          {/* Search */}
          <div className="relative group hidden sm:block justify-self-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-[200px] group-hover:w-[300px] transition-all duration-500 rounded-full border border-gray-300 px-10 py-2 focus:outline-none focus:border-orange-400 bg-white"
            />
            <button
              onClick={handleSearch}
              className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 hover:text-orange-500 transition-colors"
            >
              <IoSearch className="text-xl" />
            </button>
          </div>

          {/* Right Buttons */}
          <div className="justify-self-end flex items-center gap-4">
            {/* Sign In */}
            <Link
              to="/signin"
              className="text-sm sm:text-base text-white hover:text-black bg-orange-600 hover:bg-orange-300 px-4 py-2 rounded-full transition-all"
            >
              Sign In
            </Link>

            {/* Cart */}
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
          <Link to="/" className="hover:text-orange-500 font-medium">
            Home
          </Link>
          <Link to="/shop" className="hover:text-orange-500 font-medium">
            Shop
          </Link>
          <Link to="/contact" className="hover:text-orange-500 font-medium">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
