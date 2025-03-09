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
  const [errors, setErrors] = useState({
    doctorId: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update form data when input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear specific field error when user starts typing again
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
    
    // Clear general error message
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  // Validate doctor ID
  const validateDoctorId = (id: string): string => {
    if (!id.trim()) {
      return 'Doctor ID is required';
    }
    // Assuming doctor ID follows a pattern like "DOC-12345"
    const doctorIdPattern = /^DOC-\d{5}$/;
    if (!doctorIdPattern.test(id)) {
      return 'Invalid Doctor ID format. Use format: DOC-12345';
    }
    return '';
  };

  // Validate password
  const validatePassword = (password: string): string => {
    if (!password) {
      return 'Password is required';
    }
    if (password.length < 8) {
      return 'Password must be at least 8 characters';
    }
    // Check for password complexity (at least one uppercase, one lowercase, one number)
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (!passwordPattern.test(password)) {
      return 'Password must include at least one uppercase letter, one lowercase letter, and one number';
    }
    return '';
  };

  // Validate the entire form
  const validateForm = (): boolean => {
    const newErrors = {
      doctorId: validateDoctorId(formData.doctorId),
      password: validatePassword(formData.password)
    };
    
    setErrors(newErrors);
    return !newErrors.doctorId && !newErrors.password;
  };

  // Handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validateForm()) {
      // Form is valid, proceed with login
      console.log("Logging in with ID:", formData.doctorId);
      console.log("Password:", formData.password);
      
      // Simulate API call (replace with actual authentication)
      setTimeout(() => {
        setIsSubmitting(false);
        navigate("/Schedule");
      }, 1000);
    } else {
      // Form is invalid
      setIsSubmitting(false);
      setErrorMessage("Please correct the errors in the form.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  flex flex-col">
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
                className={`w-full px-4 py-3 border ${errors.doctorId ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out`}
                placeholder="Enter your doctor ID (e.g., DOC-12345)"
              />
              {errors.doctorId && (
                <p className="mt-1 text-red-500 text-sm">{errors.doctorId}</p>
              )}
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
                className={`w-full px-4 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out`}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="mt-1 text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            
            {/* General Error Message */}
            {errorMessage && (
              <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg animate-pulse">
                {errorMessage}
              </div>
            )}
            
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