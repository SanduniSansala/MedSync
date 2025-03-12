import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import { createPatient } from '../../services/PatientRoutes';
import { Patient } from '../../types/patientTypes';

const PatientRegistation: React.FC = () => {
  const navigate = useNavigate();
  const [patientRegistation, setPatientRegistation] = useState<Patient>({
    name: "",
    age: 0 ,
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

    // Age Validation
    if (patientRegistation.age <= 18 || patientRegistation.age > 80) {
      newErrors.age = "Age Shoud be Between 18 to 80 ";
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
        alert("Registration successful");
        navigate('/');
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      console.log("Validation errors:", errors);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto mt-10 px-6 py-8 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-bold text-center mb-4">Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
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
              <label className="block text-gray-700">Age</label>
              <input
                type="number"
                name="age"
                placeholder="Enter your Age"
                value={patientRegistation.age}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.age && <p className="text-primary-color text-sm">{errors.age}</p>}
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
          </div>
          <button
            type="submit"
            
            className="w-full bg-teal-600 text-white font-semibold py-2 rounded hover:bg-teal-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default PatientRegistation;