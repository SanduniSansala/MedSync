import React, { useState } from 'react';
import Footer from '../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import { createDoctor, Doctor } from '../../services/DoctorRoutes';

const AddDoctor: React.FC = () => {
  const [doctor, setDoctor] = useState<Doctor>({
    doctorID: "",
    name: "",
    email: "",
    contactNumber: "",
    specialty: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createDoctor(doctor);
      // Add navigation or success message here if needed
    } catch (error) {
      console.error('Error creating doctor:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex flex-col">
    <AdminHeader />
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-50 py-8">
      <div className="max-w-md mx-auto">
        <h3 className="text-2xl font-bold text-center text-blue-800 mb-8 drop-shadow-md">
          Add Doctor
        </h3>
        
        <form onSubmit={handleSubmit} className=" bg-white/30 backdrop-blur-md rounded-2xl shadow-2xl p-12 border border-blue-200">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Doctor ID
            </label>
            <input
              type="text"
              name="doctorID"
              className="w-full px-3 py-2 bg-white/50 border border-gray-300/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/80"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={doctor.specialty}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Specialization">Specialization</option>
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={doctor.password}
              onChange={handleChange}
              required
            />
          </div>
  
          <button
          type="submit"
          className="w-full bg-blue-600/90 text-white py-2 px-4 rounded-md hover:bg-blue-700/90 transition-colors font-medium shadow-sm"
        >
          Register
        </button>
      </form>
    </div>
  </div>
  <Footer />
</div>
  );
};

export default AddDoctor;