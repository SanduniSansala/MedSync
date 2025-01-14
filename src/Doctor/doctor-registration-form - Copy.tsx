import React, { useState } from 'react';
import { AtSign, KeyRound, UserPlus,LogIn } from 'lucide-react';

const DoctorRegistrationForm1: React.FC = () => {
  const [formData, setFormData] = useState({
   
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
  
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const validateForm = () => {
    const newErrors = { ...errors };
    let isValid = true;


    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    // Password validation
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
      // Submit form logic here
      console.log('Form submitted', formData);
      alert('Registration Successful!');
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center p-4 bg-primary-green" 
         style={{
           backgroundImage: 'url("/images/doctor.jpeg")',
           backgroundBlendMode: 'overlay',
           backgroundColor: ''
         }}>
    
      <div className="bg-white/30 backdrop-blur-sm rounded-xl shadow-2xl max-w-md w-full p-8 border border-blue-100">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">Doctor Registration</h2>
          <p className="text-gray-600">Join Our Medical Team</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <AtSign className="text-blue-500" />
            </div>
            
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

         {/* Password Input */}
         <div className="relative">
          
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <KeyRound className="text-blue-500" />
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center space-x-6">
            <button 
              className="flex flex-col items-center bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-400 transition w-40"
            >
              <UserPlus size={20} className="mb-2" />
              <span>Register</span>
            </button>
            
            <button 
              className="flex flex-col items-center bg-green-500 text-white p-4 rounded-lg hover:bg-green-400 transition w-40"
            >
              <LogIn size={20} className="mb-2" />
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorRegistrationForm1;
