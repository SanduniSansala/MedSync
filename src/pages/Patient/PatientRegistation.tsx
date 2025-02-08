import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import { createPatient } from '../../services/PatientRoutes';
import { Patient } from '../../types/patientTypes';

const PatientRegistation: React.FC = () => {
  const navigate = useNavigate();
  const [patientRegistation, setPatientRegistation] = useState<Patient>({
    id: "",
    name: "",
    nic: "",
    email: "",
    password: "",
    contactNo: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    // Name Validation
    if (!patientRegistation.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email Validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(patientRegistation.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // NIC Validation
    if (!patientRegistation.nic.trim()) {
      newErrors.NIC = "NIC is required";
    }

    // Password Validation
    if (!patientRegistation.password.trim()) {
      newErrors.Password = "Password is required";
    }

    // Contact Number Validation (10 digits)
    if (!/^\d{10}$/.test(patientRegistation.contactNo)) {
      newErrors.ContactNo = "Contact number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setPatientRegistation({
      ...patientRegistation,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });

    // Clear errors on change
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        await createPatient(patientRegistation);
        navigate('/Profile');
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      console.log("Validation errors:", errors);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex flex-col">
      <Header />
      <div className="min-h-screen bg-cover bg-center flex items-center justify-center p-4 bg-primary-blue" 
         style={{
           backgroundImage: 'url("/src/assets/Images/WhatsApp Image 2025-02-01 at 01.46.44_2ac08b62.jpg")',
           backgroundBlendMode: 'overlay',
           backgroundColor: ''
         }}>
      
        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-2xl ">
        <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-2xl p-12 border border-blue-200">
        <div>
        
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 tracking-wide">Registration</h2>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={patientRegistation.name}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 focus:outline-none ${
                  errors.name ? "border-primary-color" : "focus:ring focus:ring-blue-300"
                }`}
                required
              />
              {errors.name && <p className="text-primary-color text-sm">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-gray-700">NIC</label>
              <input
                type="text"
                name="nic"
                placeholder="Enter your NIC"
                value={patientRegistation.nic}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.nic && <p className="text-primary-color text-sm">{errors.nic}</p>}
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={patientRegistation.email}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 focus:outline-none ${
                  errors.email ? "border-primary-color" : "focus:ring focus:ring-blue-300"
                }`}
              />
              {errors.email && <p className="text-primary-color text-sm">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={patientRegistation.password}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 focus:outline-none ${
                  errors.Password ? "border-primary-color" : "focus:ring focus:ring-blue-300"
                }`}
              />
              {errors.Password && <p className="text-primary-color text-sm">{errors.password}</p>}
            </div>
            <div>
              <label className="block text-gray-700">Contact Number</label>
              <input
                type="tel"
                name="contactNo"
                placeholder="Enter your contact number"
                value={patientRegistation.contactNo}
                onChange={handleChange}
                maxLength={10}
                className={`w-full border rounded px-3 py-2 focus:outline-none ${
                  errors.ContactNo ? "border-primary-color" : "focus:ring focus:ring-blue-300"
                }`}
              />
              {errors.ContactNo && <p className="text-primary-color text-sm">{errors.ContactNo}</p>}
            </div>
        
            <button
              type="submit"
              className="w-full mt-8 bg-teal-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-teal-700 transform hover:scale-[1.02] transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PatientRegistation;