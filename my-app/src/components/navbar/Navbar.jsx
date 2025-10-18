import React, { useState, useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Dummy product list
  const products = [
    { id: 1, name: "Wireless Headphones" },
    { id: 2, name: "Bluetooth Speaker" },
    { id: 3, name: "Gaming Mouse" },
    { id: 4, name: "Mechanical Keyboard" },
    { id: 5, name: "Smart Watch" },
  ];

  const handleSearch = () => {
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.trim() === "") setResults([]);
    else handleSearch();
  };

  // Close dropdown when clicked outside
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
    <nav className="w-full relative">
      <div className="bg-orange-500/70 py-3 px-6 sm:px-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-3 items-center">
          <Link
            to="/"
            className="text-xl sm:text-2xl font-extrabold uppercase text-black tracking-wide"
          >
            Swift Store
          </Link>

          {/* 🔍 Search */}
          <div className="relative group hidden sm:block justify-self-center w-[250px]">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search products..."
              className="w-full rounded-full border border-gray-300 px-10 py-2 focus:outline-none focus:border-orange-400 bg-white"
            />
            <button
              onClick={handleSearch}
              className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 hover:text-orange-500"
            >
              <IoSearch className="text-xl" />
            </button>

            {query && (
              <div className="absolute mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-full z-50">
                {results.length > 0 ? (
                  results.map((item) => (
                    <div
                      key={item.id}
                      className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                    >
                      {item.name}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-500">No results found</div>
                )}
              </div>
            )}
          </div>

          {/* 👤 User / Cart */}
          <div className="justify-self-end flex items-center gap-4">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-600 text-white font-bold text-lg hover:bg-orange-700"
                >
                  {firstLetter}
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-3 w-60 bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-50">
                    <div className="flex flex-col items-center mb-3">
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-500 text-white text-2xl font-semibold mb-2">
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
                className="text-sm sm:text-base text-white hover:text-black bg-orange-600 hover:bg-orange-300 px-4 py-2 rounded-full transition-all"
              >
                Sign In
              </Link>
            )}

            <button
              onClick={() => alert("Redirect to cart page (coming soon)")}
              className="bg-white hover:bg-orange-100 text-orange-600 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm"
            >
              <RiShoppingCart2Fill className="text-2xl" />
              <span className="hidden sm:inline font-semibold">Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lower Nav */}
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
