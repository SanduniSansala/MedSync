import React, { useState } from 'react';
import Footer from '../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import { createDoctor, Doctor } from '../../services/DoctorRoutes';
import { useNavigate } from "react-router-dom";

const AddDoctor: React.FC = () => {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState<Doctor>({
    doctorID: "",
    name: "",
    email: "",
    contactNumber: "",
    specialty: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(doctor.email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Contact number validation (Assuming 10-digit number)
  const contactRegex = /^[0-9]{10}$/;
  if (!contactRegex.test(doctor.contactNumber)) {
    alert("Please enter a valid 10-digit contact number.");
    return;
  }

  // Specialty validation (fix)
  if (!doctor.specialty || doctor.specialty === "") {
    alert("Please select a valid specialty.");
    return;
  }
    try {
      const response = await createDoctor(doctor);
      console.log("API Response:", response);
  
      if (response === "Alredy docter in this ID") {
        alert("A doctor with this ID already exists. Please use a different ID.");
      } else if (response === "docter Registration sucsessfull") {
        alert("Doctor added successfully!");
        navigate("/AdminProfile"); // Redirect after success
      } else {
        alert("Unexpected response. Please try again.");
      }
    } catch (error) {
      console.error("Error creating doctor:", error);
      alert("Error creating doctor. Please try again.");
    }
  };

  return (
    <>
      <AdminHeader />
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-50 py-8">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-center text-blue-800 mb-8 drop-shadow-md">
            Add Doctor
          </h3>

          <form onSubmit={handleSubmit} className="bg-white/30 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-blue-100">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Doctor ID
              </label>
              <input
                type="text"
                name="doctorID"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                value={doctor.doctorID}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                value={doctor.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                value={doctor.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Contact Number
              </label>
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                value={doctor.contactNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Specialty
              </label>
              <select
                id="specialty"
                name="specialty"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                value={doctor.specialty}
                onChange={handleChange}
                required
              >
                <option >Select Specialty</option>
                <option >Cardiology</option>
                <option>Dermatology</option>
                <option>Neurology</option>
                <option>Oncologist</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                value={doctor.password}
                onChange={handleChange}
                required
              />
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg animate-pulse">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-md hover:shadow-lg"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddDoctor;