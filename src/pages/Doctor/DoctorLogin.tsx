import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dheader from '../../components/Dheader';
import Footer from '../../components/Footer';
import { loging } from '../../services/DoctorRoutes';

const DoctorLogin: React.FC = () => {
  const navigate = useNavigate();
  const [doctorID, setDoctorID] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const responseData = await loging(doctorID, password);

      if (responseData === "Login Sucsessfull") {
        localStorage.setItem("doctorID", doctorID); // ✅ Store doctor ID
        navigate("/DocProfile"); // ✅ Redirect to profile
      } else {
        setErrorMessage(responseData || "Login failed. Please check your credentials.");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      setErrorMessage(error.response?.data || "An unexpected error occurred.");
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed " style={{ backgroundImage: 'url("/src/assets/Images/WhatsApp Image 2025-02-01 at 01.46.44_2ac08b62.jpg")' }}>
              <Dheader />
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white/30 backdrop-blur-sm rounded-xl shadow-2xl max-w-md w-full p-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-4">Doctor Login</h2>
          <p className="text-gray-600 text-center mb-6">Join Our Medical Team</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="doctorId" className="block text-gray-700 font-semibold mb-2">Doctor ID</label>
              <input
                type="text"
                id="doctorId"
                value={doctorID}
                onChange={(e) => setDoctorID(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your Doctor ID"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {errorMessage && <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">{errorMessage}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-[1.02]"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorLogin;
