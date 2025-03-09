import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dheader from '../../components/Dheader';
import Footer from '../../components/Footer';

const DoctorLogin: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    doctorId: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update form data when input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Proceed with login without validation
    console.log("Logging in with ID:", formData.doctorId);
    console.log("Password:", formData.password);
    
    // Simulate API call (replace with actual authentication)
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/Schedule");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br flex flex-col">
      <Dheader />
      <div className="min-h-screen bg-cover bg-center flex items-center justify-center p-4 bg-primary-green" 
         style={{
           backgroundImage: 'url("/src/assets/Images/8.jpg")',
           backgroundBlendMode: 'overlay',
           backgroundColor: ''
         }}>
        <div className="bg-white/30 backdrop-blur-sm rounded-xl shadow-2xl max-w-md w-full p-8 border border-blue-100">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">Doctor Login</h2>
            <p className="text-gray-600">Access Your Medical Dashboard</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Doctor ID Input */}
            <div>
              <label htmlFor="doctorId" className="block text-gray-700 font-semibold mb-2">
                Doctor ID
              </label>
              <input
                type="text"
                name="doctorId"
                id="doctorId"
                value={formData.doctorId}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                placeholder="Enter your doctor ID"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                placeholder="Enter your password"
              />
            </div>
            
            {/* Login Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorLogin;