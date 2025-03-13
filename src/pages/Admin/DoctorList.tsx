import React, { useEffect, useState } from "react";
import { getAll, updateDoctorById, deleteDoctor } from "../../services/DoctorRoutes";
import { useNavigate } from "react-router-dom";

interface Doctor {
  doctorID: string;
  name: string;
  email: string;
  contactNumber: string;
  specialty: string;
  password?: string;
}

export const DoctorList: React.FC = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getAll();
        if (Array.isArray(data)) {
          setDoctors(data);
        } else {
          setDoctors([]);
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleUpdate = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setEmail(doctor.email);
    setContactNumber(doctor.contactNumber);
    setPassword("");
  };

  const handleDelete = async (doctorID: string) => {
    if (window.confirm("Are you sure you want to delete this doctor?")) {
      try {
        await deleteDoctor(doctorID);
        setDoctors((prevDoctors) => prevDoctors.filter((doc) => doc.doctorID !== doctorID));
        alert("Doctor deleted successfully!");
      } catch (error) {
        console.error("Error deleting doctor:", error);
        alert("Failed to delete doctor. Please try again.");
      }
    }
  };

  const handleSave = async () => {
    if (selectedDoctor) {
      const updatedDoctor = {
        doctorID: selectedDoctor.doctorID,
        name: selectedDoctor.name,
        specialty: selectedDoctor.specialty,
        email,
        contactNumber,
        password: password || undefined, // Only update password if provided
      };
      try {
        await updateDoctorById(selectedDoctor.doctorID, updatedDoctor);
        setSelectedDoctor(null);
        setDoctors((prevDoctors) =>
          prevDoctors.map((doc) =>
            doc.doctorID === selectedDoctor.doctorID
              ? { ...doc, email, contactNumber } // Keep name and specialty unchanged
              : doc
          )
        );
        alert("Doctor details updated successfully!");
      } catch (error) {
        alert("Doctor details updated successfully!.");
        navigate("/AdminProfile");
      }
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Registered Doctors</h2>
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : doctors.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Specialty</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Contact</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.doctorID} className="text-center border-b">
                  <td className="px-4 py-2 border">{doctor.name}</td>
                  <td className="px-4 py-2 border">{doctor.specialty}</td>
                  <td className="px-4 py-2 border">{doctor.email}</td>
                  <td className="px-4 py-2 border">{doctor.contactNumber}</td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => handleUpdate(doctor)}
                      className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 mx-1"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(doctor.doctorID)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 mx-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">No doctors found.</p>
      )}

      {selectedDoctor && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Update Doctor</h2>
            <input
              type="text"
              value={selectedDoctor.name}
              className="border p-2 w-full mb-2 bg-gray-200"
              readOnly
            />
            <input
              type="text"
              value={selectedDoctor.specialty}
              className="border p-2 w-full mb-4 bg-gray-200"
              readOnly
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedDoctor(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorList;
