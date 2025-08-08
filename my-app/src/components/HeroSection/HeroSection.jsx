import React from "react";

const HeroSection = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-orange-300 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-500">
        {/* Description Section */}
        <div className="p-6 md:p-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-orange-600">
            Welcome to <span className="text-black">Swift Store</span>
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed ">
            Swift Store is your one-stop online shop for all things trendy and
            essential. Explore a wide range of products with unbeatable prices
            and lightning-fast delivery.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full h-full">
          <img
            src="https://tr.rbxcdn.com/180DAY-e769ab90f9009c51185fc17975678c40/768/432/Image/Webp/noFilter"
            alt="Swift Store"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
