import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const PatientLogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      setError("Email and password are both required.");
      return;
    }
    setError("");
    // Add your login logic here
    navigate("/Profile");
  };

  return (
    <>
      <Header />

      <div className="w-full flex justify-center">
  <div className="w-[600px] max-w-full p-8 rounded-xl shadow-xl bg-white my-10 transition-all duration-300 hover:shadow-2xl">
    <div className="grid grid-cols-2 gap-6">
      <div className="font-medium text-gray-700 self-center">Email</div>
      <div>
        <input
          className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors duration-200"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      
      <div className="font-medium text-gray-700 self-center">Password</div>
      <div>
        <input
          className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors duration-200"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>

      {error && (
        <div className="col-span-2 text-red-600 bg-red-50 p-3 rounded-lg border border-red-200 flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      <div className="col-span-2 mt-4">
        <button
          onClick={handleSubmit}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-[1.02]"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </>
  );
};

export default PatientLogin;