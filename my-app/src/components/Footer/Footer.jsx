import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white mt-16">
      <div className="max-w-[1280px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* --- About Section --- */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Swift Store</h2>
          <p className="text-orange-100 leading-relaxed">
            Your trusted online store for everything you need — electronics,
            fashion, and home essentials — delivered at lightning speed.
          </p>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-200">Home</a></li>
            <li><a href="#" className="hover:text-orange-200">Shop</a></li>
            <li><a href="#" className="hover:text-orange-200">About Us</a></li>
            <li><a href="#" className="hover:text-orange-200">Contact</a></li>
          </ul>
        </div>

        {/* --- Contact / Social --- */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
          <p className="text-orange-100 mb-4">
            Follow us on social media for updates and exclusive deals.
          </p>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-orange-200"><FaFacebook /></a>
            <a href="#" className="hover:text-orange-200"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-200"><FaTwitter /></a>
            <a href="#" className="hover:text-orange-200"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="bg-orange-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Swift Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
