import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getPatientByEmail, Patient } from "../../services/PatientRoutes";

const Profile: React.FC = () => {
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const email = localStorage.getItem("userEmail"); // Replace with actual method to get user email
        if (!email) {
          console.error("No email found for fetching profile.");
          return;
        }
        const patientData = await getPatientByEmail(email);
        setPatient(patientData);
      } catch (error) {
        console.error("Error fetching patient details:", error);
      }
    };

    fetchPatient();
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto mt-10 px-6 py-8 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-bold text-center mb-4">Profile</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <p className="border rounded px-3 py-2">
                {patient?.name || "N/A"}
              </p>
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <p className="border rounded px-3 py-2">
                {patient?.email || "N/A"}
              </p>
            </div>
            <div>
              <label className="block text-gray-700">NIC</label>
              <p className="border rounded px-3 py-2">{patient?.age || "N/A"}</p>
            </div>
            <div>
              <label className="block text-gray-700">Phone number</label>
              <p className="border rounded px-3 py-2">
                {patient?.contactNo || "N/A"}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-center mb-4">
              Appointment Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Doctor's Name</label>
                <p className="border rounded px-3 py-2">N/A</p>
              </div>
              <div>
                <label className="block text-gray-700">Specialization</label>
                <p className="border rounded px-3 py-2">N/A</p>
              </div>
              <div>
                <label className="block text-gray-700">Date</label>
                <p className="border rounded px-3 py-2">N/A</p>
              </div>
              <div>
                <label className="block text-gray-700">Time</label>
                <p className="border rounded px-3 py-2">N/A</p>
              </div>
              <div>
                <label className="block text-gray-700">Appointment Number</label>
                <p className="border rounded px-3 py-2">N/A</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
