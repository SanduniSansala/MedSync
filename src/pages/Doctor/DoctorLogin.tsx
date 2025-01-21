import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dheader from '../../components/Dheader';
import Footer from '../../components/Footer';
// import bgimg from '../../assets/Images/bgimg.jpg';
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
    <div>
      <Dheader />
      <div className='flex justify-center py-3 bg-cover' >
      {/* // style={{ backgroundImage: `url(${bgimg})` }} */}
        <div className="bg-white/65 shadow-lg rounded-lg p-8 max-w-sm w-full">
          <h2 className="text-2xl font-bold text-center text-black mb-6">
            Doctor Login Page
          </h2>
          <div className="mb-4">
            <label htmlFor="userId" className="block text-gray-600 font-medium mb-2">
              Enter ID:
            </label>
            <input
              type="text"
              name="doctorId"
              id="userId"
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your ID"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 font-medium mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          {errorMessage && (
            <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
          )}
          <button
            onClick={handleLogin}
            className="w-full bg-primary-color text-white py-2 rounded hover:bg-secondary-color transition"
          >
            Login
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorLogin;