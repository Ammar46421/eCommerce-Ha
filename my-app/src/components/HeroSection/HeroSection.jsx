import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/5632377/pexels-photo-5632377.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Trendy Fashion",
      subtitle: "Stay ahead with our new fashion arrivals.",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/5077045/pexels-photo-5077045.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Modern Electronics",
      subtitle: "Discover the latest gadgets at unbeatable prices.",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/6585666/pexels-photo-6585666.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Home & Living",
      subtitle: "Upgrade your lifestyle with premium home essentials.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full bg-gradient-to-br from-orange-100 via-orange-50 to-white py-16">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/80 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border border-orange-300 transition-all duration-500">
          {/* Left Text Section */}
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-600 mb-5 leading-tight">
              {slides[current].title}
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              {slides[current].subtitle}
            </p>
            <div className="flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
                🛒 Shop Now
              </button>
              <button className="border border-orange-400 text-orange-600 hover:bg-orange-100 px-6 py-2.5 rounded-lg font-semibold transition-all duration-300">
                Explore More
              </button>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            key={slides[current].image}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={slides[current].image}
              alt="Swift Store Slide"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        </div>

        {/* Slide Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-orange-500 scale-125"
                  : "bg-orange-200 hover:bg-orange-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};



export default HeroSection;
