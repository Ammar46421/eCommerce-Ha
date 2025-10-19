import React, { useState } from "react";
import { FaFileUpload, FaHeartbeat, FaRobot } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const HealthDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); // check logged in user
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    if (!user) {
      setShowModal(true); // only show popup if not logged in
    } else {
      // User is logged in → here you can add actual functionality later
      console.log("Card clicked, user is logged in!");
    }
  };

  const handleYes = () => {
    setShowModal(false);
    navigate("/signin");
  };

  const handleNo = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-white px-6 sm:px-12 py-24">
      <h1 id="HD" className="text-4xl md:text-5xl font-extrabold text-red-600 mb-20 text-center">
        Your Health Dashboard
      </h1>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        {/* Upload Report */}
        <div
          onClick={handleCardClick}
          className="cursor-pointer bg-gradient-to-br from-red-50 to-red-100 hover:scale-105 transform transition-all rounded-2xl p-8 text-center shadow-lg"
        >
          <div className="flex justify-center mb-4 text-red-600 text-4xl">
            <FaFileUpload />
          </div>
          <h2 className="text-2xl font-bold text-red-600 mb-2">Upload Your Report</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Upload your medical reports securely for tracking and future reference.
          </p>
        </div>

        {/* Manual Input Vitals */}
        <div
          onClick={handleCardClick}
          className="cursor-pointer bg-gradient-to-br from-red-50 to-red-100 hover:scale-105 transform transition-all rounded-2xl p-8 text-center shadow-lg"
        >
          <div className="flex justify-center mb-4 text-red-600 text-4xl">
            <FaHeartbeat />
          </div>
          <h2 className="text-2xl font-bold text-red-600 mb-2">Manual Input Vitals</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Add your vitals manually to maintain a personal health record and monitor trends.
          </p>
        </div>

        {/* AI Reports Explain */}
        <div
          onClick={handleCardClick}
          className="cursor-pointer bg-gradient-to-br from-red-50 to-red-100 hover:scale-105 transform transition-all rounded-2xl p-8 text-center shadow-lg"
        >
          <div className="flex justify-center mb-4 text-red-600 text-4xl">
            <FaRobot />
          </div>
          <h2 className="text-2xl font-bold text-red-600 mb-2">AI Reports Explain</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Let AI help you understand your medical reports easily and provide insights.
          </p>
        </div>
      </div>

      {/* Custom Popup Modal */}
      {!user && showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl p-8 w-80 sm:w-96 text-center shadow-xl">
            <h2 className="text-xl font-bold text-red-600 mb-4">Sign in to continue?</h2>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={handleYes}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-all"
              >
                Yes
              </button>
              <button
                onClick={handleNo}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-full font-semibold transition-all"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthDashboard;
