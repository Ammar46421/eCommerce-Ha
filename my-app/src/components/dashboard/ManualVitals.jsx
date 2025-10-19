import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase/firebaseConfig_TEMP";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const ManualVitals = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [vitals, setVitals] = useState({
    bloodPressure: "",
    heartRate: "",
    temperature: "",
    sugar: "",
    oxygenLevel: "",
  });

  const [moreVitals, setMoreVitals] = useState([]);
  const [newVitalName, setNewVitalName] = useState("");

  // redirect if not logged in
  useEffect(() => {
    if (!user) navigate("/signin");
  }, [user, navigate]);

  const handleChange = (e) => {
    setVitals({ ...vitals, [e.target.name]: e.target.value });
  };

  const handleAddMoreVital = () => {
    if (!newVitalName.trim()) return;
    setMoreVitals([...moreVitals, { name: newVitalName, value: "" }]);
    setNewVitalName("");
  };

  const handleMoreVitalChange = (index, value) => {
    const updated = [...moreVitals];
    updated[index].value = value;
    setMoreVitals(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "userVitals"), {
        uid: user.uid,
        email: user.email,
        ...vitals,
        moreVitals,
        createdAt: serverTimestamp(),
      });

      alert("✅ Vitals saved successfully!");
      setVitals({
        bloodPressure: "",
        heartRate: "",
        temperature: "",
        sugar: "",
        oxygenLevel: "",
      });
      setMoreVitals([]);
    } catch (error) {
      alert("❌ Error saving vitals: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 sm:px-12 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-12 text-center">
        Manual Input Vitals
      </h1>

      <div className="max-w-xl mx-auto bg-red-50 p-8 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-5">
          {Object.entries(vitals).map(([key, value]) => (
            <div key={key}>
              <label className="block font-medium mb-1 text-gray-700 capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="text"
                name={key}
                value={value}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400"
              />
            </div>
          ))}

          {/* More Vitals */}
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700 mb-2">Add More Vitals (optional)</h3>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Vital Name"
                value={newVitalName}
                onChange={(e) => setNewVitalName(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400"
              />
              <button
                type="button"
                onClick={handleAddMoreVital}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
              >
                Add
              </button>
            </div>

            {moreVitals.map((v, index) => (
              <div key={index} className="flex gap-2 mb-2 items-center">
                <label className="w-32 text-gray-700 font-medium">{v.name}</label>
                <input
                  type="text"
                  value={v.value}
                  onChange={(e) => handleMoreVitalChange(index, e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400"
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition-all"
          >
            {loading ? "Saving..." : "Save Vitals"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManualVitals;
