import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const handleGetStarted = () => {
    setModalOpen(true); // Open custom popup
  };

  const handleYes = () => {
    setModalOpen(false);
    navigate("/signin"); // Redirect to SignIn
  };

  const handleNo = () => {
    setModalOpen(false); // Close popup and stay
  };

  return (
    <section className="w-full bg-white py-32 px-6 sm:px-12 flex flex-col items-center text-center relative">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-600 leading-tight mb-6">
        Manage Your Healths, Reports and Vitals
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
        Keep track of your health data, monitor your reports, and manage your vitals easily and securely.
      </p>
      <div>
        <button
          onClick={handleGetStarted}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all"
        >
          Get Started
        </button>
      </div>

      {/* Custom Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-sm w-full text-center shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              Sign in to continue?
            </h2>
            <div className="flex justify-center gap-6">
              <button
                onClick={handleYes}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-all"
              >
                Yes
              </button>
              <button
                onClick={handleNo}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-full font-semibold transition-all"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
