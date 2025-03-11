import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDoctorById, updateDoctorById } from "../../services/DoctorRoutes";

const UpdateDoctor: React.FC = () => {
  const [doctorId, setDoctorId] = useState("");
  const [doctor, setDoctor] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState(""); // Password state
  const navigate = useNavigate();

  // Validation state
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  // Check if the entered Doctor ID exists
  const handleCheckDoctor = async () => {
    try {
      if (!doctorId.trim()) {
        alert("Please enter a Doctor ID.");
        return;
      }

      const doctorData = await getDoctorById(doctorId);
      if (!doctorData) {
        alert("Invalid Doctor ID. Please check and try again.");
      } else {
        setDoctor(doctorData);
        setValidationErrors({}); // Reset validation errors
      }
    } catch (error) {
      console.error("Error fetching doctor:", error);
      setError("Error checking Doctor ID. Please try again.");
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  // Validate form inputs
  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!doctor.name || doctor.name.trim().length < 3) {
      errors.name = "Name must be at least 3 characters long.";
    }

    if (!doctor.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(doctor.email)) {
      errors.email = "Invalid email format.";
    }

    if (!doctor.contactNo || !/^\d+$/.test(doctor.contactNo) || doctor.contactNo.length < 10) {
      errors.contactNo = "Enter a valid 10-digit contact number.";
    }

    if (!doctor.specialty) {
      errors.specialty = "Please select a specialty.";
    }

    if (!password || password.length < 6) {
      errors.password = "Password is required and must be at least 6 characters long.";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Update the doctor details
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating doctor with ID:", doctorId); // Debugging
  
    if (!doctorId) {
      alert("Doctor ID is missing!");
      return;
    }
  
    try {
      const updatedDoctor = { ...doctor, password };
      await updateDoctorById(doctorId, updatedDoctor);
      alert("Doctor details updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error updating doctor:", error);
      alert("Failed to update doctor. Please try again.");
    }
  };
  

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mb-4">Update Doctor</h2>

      {/* Doctor ID Input */}
      {!doctor && (
        <div className="flex gap-4">
          <input
            type="text"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            placeholder="Enter Doctor ID"
            className="border rounded px-4 py-2 flex-grow"
          />
          <button
            onClick={handleCheckDoctor}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      )}

      {/* Error Message */}
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}

      {/* Doctor Update Form (Shown if Doctor ID is valid) */}
      {doctor && (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700">Doctor ID</label>
            <input
              type="text"
              value={doctorId}
              disabled
              className="border rounded px-4 py-2 w-full bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={doctor.name || ""}
              onChange={handleChange}
              className="border rounded px-4 py-2 w-full"
              required
            />
            {validationErrors.name && <p className="text-red-500">{validationErrors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={doctor.email || ""}
              onChange={handleChange}
              className="border rounded px-4 py-2 w-full"
              required
            />
            {validationErrors.email && <p className="text-red-500">{validationErrors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Contact Number</label>
            <input
              type="text"
              name="contactNo"
              value={doctor.contactNo || ""}
              onChange={handleChange}
              className="border rounded px-4 py-2 w-full"
              required
            />
            {validationErrors.contactNo && <p className="text-red-500">{validationErrors.contactNo}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Specialty</label>
            <select
              name="specialty"
              value={doctor.specialty || ""}
              onChange={handleChange}
              className="border rounded px-4 py-2 w-full"
              required
            >
              <option value="">Select Specialty</option>
              <option>Cardiology</option>
              <option>Dermatology</option>
              <option>Neurology</option>
              <option>Oncology</option>
            </select>
            {validationErrors.specialty && <p className="text-red-500">{validationErrors.specialty}</p>}
          </div>

          {/* Password Field (Now Required) */}
          <div>
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded px-4 py-2 w-full"
              required
            />
            {validationErrors.password && <p className="text-red-500">{validationErrors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateDoctor;
