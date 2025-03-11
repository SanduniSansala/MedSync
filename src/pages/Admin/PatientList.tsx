import React, { useEffect, useState } from "react";
import { getAll } from "../../services/PatientRoutes";

interface Patient {
  id: string;
  name: string;
  nic: string;
  email: string;
  contactNo: string;
}

export const PatientList: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true); // ✅ Add loading state

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await getAll(); // ✅ Fetch patient data
        if (Array.isArray(data)) {
          setPatients(data); // ✅ Store in state
        } else {
          setPatients([]); // ✅ Handle void case
        }
      } catch (error) {
        console.error("Error fetching patients:", error);
      } finally {
        setLoading(false); // ✅ Stop loading
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Registered Patients</h2>
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
            
              <th className="border p-2">Name</th>
              <th className="border p-2">NIC</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Contact No</th>
            </tr>
          </thead>
          <tbody>
            {patients.length > 0 ? (
              patients.map((patient) => (
                <tr key={patient.id} className="text-center">
                
                  <td className="border p-2">{patient.name}</td>
                  <td className="border p-2">{patient.nic}</td>
                  <td className="border p-2">{patient.email}</td>
                  <td className="border p-2">{patient.contactNo}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="border p-4 text-center text-gray-500">
                  No patients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PatientList;
