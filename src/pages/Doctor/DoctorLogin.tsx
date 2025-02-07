import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dheader from '../../components/Dheader';
import Footer from '../../components/Footer';

const DoctorLogin: React.FC = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleLogin = () => {
    if (!selectedId || !password) {
      setErrorMessage("Please enter both ID and password.");
    } else {
      setErrorMessage("");
      console.log("Logged in with ID:", selectedId);
      console.log("Password:", password);
      navigate("/Schedule");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex flex-col">
      <Dheader />
      <div className='flex justify-center items-center flex-grow px-4 py-12'>
        <div className="bg-white/80 shadow-2xl rounded-2xl p-8 max-w-md w-full transform transition-all hover:scale-105 hover:shadow-3xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-2 tracking-wide">
              Doctor Login
            </h2>
            <p className="text-gray-500 text-sm">Enter your credentials securely</p>
          </div>
          <div className="space-y-6">
            <div>
              <label htmlFor="userId" className="block text-gray-700 font-semibold mb-2">
                Doctor ID
              </label>
              <input
                type="text"
                name="doctorId"
                id="userId"
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                placeholder="Enter your doctor ID"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                placeholder="Enter your password"
              />
            </div>
            {errorMessage && (
              <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg animate-pulse">
                {errorMessage}
              </div>
            )}
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-md hover:shadow-lg"
            >
              Sign In
            </button>
          </div>
          <div className="text-center mt-6">
            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorLogin;