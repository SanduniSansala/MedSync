import React, { useEffect, useState } from "react";
import { getAll } from "../../services/DoctorRoutes";

interface Doctor {
  doctorID: string;
  name: string;
  email: string;
  contactNumber: string;
  specialty: string;
}

export const DoctorList: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

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
  };

  const handleDelete = (doctorID: string) => {
    console.log("Delete doctor with ID:", doctorID);
    // Implement delete logic
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Registered Doctors</h2>
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : doctors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <div key={doctor.doctorID} className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-800">{doctor.name}</h3>
              <p className="text-gray-600"><strong>Email:</strong> {doctor.email}</p>
              <p className="text-gray-600"><strong>Contact:</strong> {doctor.contactNumber}</p>
              <p className="text-gray-600"><strong>Specialty:</strong> {doctor.specialty}</p>
              <div className="flex justify-between mt-4">
                <button onClick={() => handleUpdate(doctor)} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Update</button>
                <button onClick={() => handleDelete(doctor.doctorID)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No doctors found.</p>
      )}

      {selectedDoctor && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Update Doctor</h2>
            <input type="text" defaultValue={selectedDoctor.name} className="border p-2 w-full mb-2" />
            <input type="email" defaultValue={selectedDoctor.email} className="border p-2 w-full mb-2" />
            <input type="text" defaultValue={selectedDoctor.contactNumber} className="border p-2 w-full mb-2" />
            <input type="text" defaultValue={selectedDoctor.specialty} className="border p-2 w-full mb-4" />
            <div className="flex justify-end">
              <button onClick={() => setSelectedDoctor(null)} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mr-2">Cancel</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorList;