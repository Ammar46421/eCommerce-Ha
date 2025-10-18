import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const firstLetter =
    user?.displayName?.charAt(0).toUpperCase() ||
    user?.email?.charAt(0).toUpperCase() ||
    "?";

  return (
    <nav className="w-full relative bg-white shadow-sm">
      <div className="py-3 px-6 sm:px-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-3 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl sm:text-2xl font-extrabold uppercase text-red-600 tracking-wide"
          >
            HealthMate
          </Link>

          {/* Center: Navigation Links */}
          <div className="justify-self-center flex space-x-6">
            <Link to="/" className="hover:text-red-600 font-medium">
              Home
            </Link>
            <Link to="/about" className="hover:text-red-600 font-medium">
              About
            </Link>
            <Link to="/contact" className="hover:text-red-600 font-medium">
              Contact
            </Link>
          </div>

          {/* 👤 User */}
          <div className="justify-self-end flex items-center gap-4">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white font-bold text-lg hover:bg-red-700"
                >
                  {firstLetter}
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-3 w-60 bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-50">
                    <div className="flex flex-col items-center mb-3">
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-500 text-white text-2xl font-semibold mb-2">
                        {firstLetter}
                      </div>
                      <h3 className="font-semibold text-gray-800">
                        {user.displayName || "User"}
                      </h3>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <button
                      onClick={logout}
                      className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/signin"
                className="text-sm sm:text-base text-white hover:text-red-600 bg-red-600 hover:bg-white border border-red-600 px-4 py-2 rounded-full transition-all"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
