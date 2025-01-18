import React from 'react'
import Dheader from '../../components/Dheader'
import Footer from '../../components/Footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AtSign, Phone, User, KeyRound, Stethoscope, Hospital } from 'lucide-react';
import bgimg from '../../assets/Images/1.png'
import { createDoctor } from '../../services/DoctorRoutes'
//import { Doctor } from '../../types/doctorTypes'

const Form:React.FC = () => {
  const navigate= useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    specialty: '',
    doctorId: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    contactNumber: '',
    specialty: '',
    doctorId: '',
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

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required*';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required*';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    // contactNumber validation
    const contactNumberRegex = /^[0-9]{10}$/;
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'contactNumber number is required*';
      isValid = false;
    } else if (!contactNumberRegex.test(formData.contactNumber)) {
      newErrors.contactNumber = 'contactNumber number must be 10 digits';
      isValid = false;
    }

    // Specialty validation
    if (!formData.specialty.trim()) {
      newErrors.specialty = 'Specialty is required*';
      isValid = false;
    }

    // Doctor ID validation
    if (!formData.doctorId.trim()) {
      newErrors.doctorId = 'Doctor ID is required*';
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required*';
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const data = {doctorID: formData.doctorId, name: formData.name, contactNumber: formData.contactNumber, speciality: formData.specialty, password: formData.password}
      await createDoctor(data);
      // Submit form logic here
      console.log('Form submitted', formData);
      alert('Registration Successful!');
    }
  };
  return (
    
    <div>
        <Dheader/>
        <div className='bg-cover' 
        style={{backgroundImage:`url(${bgimg})`}}>
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center p-4 bg-primary-green" 
         style={{
           backgroundImage: 'url("/images/doctor.jpeg")',
           backgroundBlendMode: 'overlay',
           backgroundColor: ''
         }}>
    
      <div className="bg-white/30 backdrop-blur-sm rounded-xl shadow-2xl max-w-md w-full p-8 border border-blue-100">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-primary-color mb-2">Doctor Registration</h2>
          <p className="text-gray-600 font-semibold">Join Our Medical Team</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="text-primary-color" />
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                ${errors.name ? 'border-primary-color focus:ring-red-500' : 'border-gray-300 focus:ring-primary-color'}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <AtSign className="text-primary-color" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                ${errors.email ? 'border-primary-color focus:ring-red-500' : 'border-gray-300 focus:ring-primary-color'}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* contactNumber Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <div className="text-primary-color" />
            </div>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="contactNumber Number"
              className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                ${errors.contactNumber ? 'border-primary-color focus:ring-red-500' : 'border-gray-300 focus:ring-primary-color'}`}
            />
            {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>}
          </div>

          {/* Specialty Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Stethoscope className="text-primary-color" />
            </div>
            <input
              type="text"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              placeholder="Medical Specialty"
              className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                ${errors.specialty ? 'border-primary-color focus:ring-red-500' : 'border-gray-300 focus:ring-primary-color'}`}
            />
            {errors.specialty && <p className="text-red-500 text-sm mt-1">{errors.specialty}</p>}
          </div>

          {/* Doctor ID Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Hospital className="text-primary-color" />
            </div>
            <input
              type="text"
              name="doctorId"
              value={formData.doctorId}
              onChange={handleChange}
              placeholder="Doctor ID"
              className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                ${errors.doctorId ? 'border-primary-color focus:ring-red-500' : 'border-gray-300 focus:ring-primary-color'}`}
            />
            {errors.doctorId && <p className="text-red-500 text-sm mt-1">{errors.doctorId}</p>}
          </div>

          {/* Password Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <KeyRound className="text-primary-color" />
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                ${errors.password ? 'border-primary-color focus:ring-red-500' : 'border-gray-300 focus:ring-primary-color'}`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-primary-color text-white py-2 rounded-lg hover:bg-secondary-color transition-colors duration-300 ease-in-out"
            
            
          >
            Register
          </button>
        </form>
      </div>
    </div>


        </div>
        <Footer/>
      
    </div>
  )
}

export default Form
