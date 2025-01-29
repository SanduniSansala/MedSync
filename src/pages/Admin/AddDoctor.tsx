import React, { useState } from 'react';
import Footer from '../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import { createDoctor, Doctor } from '../../services/DoctorRoutes';

const AddDoctor: React.FC = () => {
  const [doctor, setDoctor] = useState<Doctor>({
    docterID: "",
    name: "",
    email: "",
    contactNumber: "",
    specialty: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <>
      <AdminHeader />
      <div className="container mt-3">
        <h3 className="text-primary text-center">Add Doctor</h3>
        <form onSubmit={handleSubmit} className="card p-3 shadow">
          <div className="form-group mb-3">
            <label htmlFor="doctorID">Doctor ID</label>
            <input
              type="text"
              id="doctorID"
              name="doctorID"
              className="form-control"
              value={doctor.docterID}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={doctor.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={doctor.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              className="form-control"
              value={doctor.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="specialty">Specialty</label>
            <input
              type="text"
              id="specialty"
              name="specialty"
              className="form-control"
              value={doctor.specialty}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={doctor.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddDoctor;