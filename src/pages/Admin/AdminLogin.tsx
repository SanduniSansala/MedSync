import React from 'react'
import  { useState } from 'react';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import bgimg from '../../assets/Images/1.png';
import image from '../../assets/Images/Logo-Photoroom (1).png';
import { loging } from '../../services/AdminRoutes';

export const AdminLogin:React.FC = () => {
    const navigate = useNavigate();

  const [selectedId, setSelectedId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const responseData: string = await loging(selectedId, password);
        console.log("Response Data:", responseData); // 🔍 Debugging

        if (responseData === "Login Sucsessfull") { // ✅ No more error
            navigate("/AdminProfile");
        } else {
            alert(responseData || "Unexpected error. No response data.");
        }
    } catch (error: any) {
        console.error("Error logging in:", error);

        if (error.response) {
            alert(error.response.data || "Error from server but no message.");
        } else {
            alert("An unexpected error occurred. Please try again.");
        }
    }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex flex-col">
      <div className="w-full flex justify-center bg-gradient-to-r from-blue-500 to-purple-500 items-center shadow-lg">
        <div className="flex flex-row container bg-transparent py-4 px-6">
          <div
            className="basis-1/4 hover:cursor-pointer"
            onClick={() => navigate("/Admin")}
          >
            <img
              className="flex items-center w-[130px] rounded-xl"
              src={image}
              alt="logo"
            />
          </div>
        </div>
      </div>
      
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center p-4 bg-primary-green"
        style={{ backgroundImage: `url(${bgimg})`, backgroundBlendMode: 'overlay', backgroundColor: '' }}
      >
        <div className="bg-white/30 backdrop-blur-sm rounded-xl shadow-2xl max-w-md w-full p-8 border border-blue-100">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">Admin Login Page</h2>
            <p className="text-gray-600">Please enter your credentials</p>
          </div>
          <div className="space-y-6">
            <div>
              <label htmlFor="userId" className="block text-gray-700 font-semibold mb-2">
                Enter ID:
              </label>
              <input
                type="text"
                name="doctorId"
                id="userId"
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                placeholder="Enter your admin ID"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                Password:
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
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-md hover:shadow-lg"
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
