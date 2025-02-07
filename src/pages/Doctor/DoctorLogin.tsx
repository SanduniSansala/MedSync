import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dheader from '../../components/Dheader';
import Footer from '../../components/Footer';
import {KeyRound ,Stethoscope} from 'lucide-react';

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

  const [formData, setFormData] = useState({
    doctorId: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    doctorId: '',
    password: ''
  });


  const validateForm = () => {
    const newErrors = { ...errors };
    let isValid = true;

    
    if (!formData.doctorId.trim()) {
      newErrors.doctorId = 'Doctor ID is required';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted', formData);
      alert('Registration Successful!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex flex-col">
      <Dheader />
      <div className="min-h-screen bg-cover bg-center flex items-center justify-center p-4 bg-primary-green" 
         style={{
           backgroundImage: 'url("/src/assets/Images/8.jpg")',
           backgroundBlendMode: 'overlay',
           backgroundColor: ''
         }}>
        <div className="bg-white/30 backdrop-blur-sm rounded-xl shadow-2xl max-w-md w-full p-8 border border-blue-100">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">Doctor Registration</h2>
          <p className="text-gray-600">Join Our Medical Team</p>
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

             {/* Password Input */}
         <div className="relative">
          
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
             
            </div>
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