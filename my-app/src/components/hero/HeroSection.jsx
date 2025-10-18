import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full bg-white py-32 px-6 sm:px-12 flex flex-col items-center text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-600 leading-tight mb-6">
        Manage Your Healths, Reports and Vitals
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
        Keep track of your health data, monitor your reports, and manage your vitals easily and securely.
      </p>
      <div>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
