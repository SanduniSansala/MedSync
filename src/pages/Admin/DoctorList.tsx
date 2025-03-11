import React, { useEffect, useState } from "react";
import { getAll } from "../../services/DoctorRoutes"; // ✅ Ensure this is the correct import path

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

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getAll(); // ✅ Call getAll() from DoctorRoutes.ts
        if (Array.isArray(data)) {
          setDoctors(data); // ✅ Store fetched doctors in state
        } else {
          setDoctors([]); // ✅ Handle empty response case
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Registered Doctors</h2>
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Doctor ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Contact No</th>
              <th className="border p-2">Specialty</th>
            </tr>
          </thead>
          <tbody>
            {doctors.length > 0 ? (
              doctors.map((doctor) => (
                <tr key={doctor.doctorID} className="text-center">
                  <td className="border p-2">{doctor.doctorID}</td>
                  <td className="border p-2">{doctor.name}</td>
                  <td className="border p-2">{doctor.email}</td>
                  <td className="border p-2">{doctor.contactNumber}</td>
                  <td className="border p-2">{doctor.specialty}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="border p-4 text-center text-gray-500">
                  No doctors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DoctorList;
