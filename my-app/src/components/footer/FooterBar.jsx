// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-8 flex flex-col sm:flex-row justify-between items-center">
        {/* Left side: branding */}
        <div className="mb-4 sm:mb-0">
          <h2 className="text-xl font-bold">HealthMate</h2>
          <p className="text-sm text-red-100 mt-1">&copy; {new Date().getFullYear()} HealthMate. All rights reserved.</p>
        </div>

        {/* Right side: links */}
        <div className="flex gap-6">
          <Link to="/" className="hover:text-red-200 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-red-200 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-red-200 transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
