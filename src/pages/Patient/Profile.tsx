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
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("/src/assets/Images/8.jpg")' }}>
      <Header />
      <div className="pt-10 pb-20 px-4">
        <div className="max-w-2xl mx-auto px-6 py-8 bg-white/70 bg-opacity-95 shadow-lg rounded-lg border border-gray-200 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Profile</h2>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <p className="border rounded-md px-4 py-3 bg-gray-50 text-gray-800">
                  {patient?.name || "N/A"}
                </p>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <p className="border rounded-md px-4 py-3 bg-gray-50 text-gray-800">
                  {patient?.email || "N/A"}
                </p>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">NIC</label>
                <p className="border rounded-md px-4 py-3 bg-gray-50 text-gray-800">{patient?.age || "N/A"}</p>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone number</label>
                <p className="border rounded-md px-4 py-3 bg-gray-50 text-gray-800">
                  {patient?.contactNo || "N/A"}
                </p>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-center mb-6 text-blue-600">
                Appointment Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Doctor's Name</label>
                  <p className="border rounded-md px-4 py-3 bg-gray-50 text-gray-800">N/A</p>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Specialization</label>
                  <p className="border rounded-md px-4 py-3 bg-gray-50 text-gray-800">N/A</p>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Date</label>
                  <p className="border rounded-md px-4 py-3 bg-gray-50 text-gray-800">N/A</p>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Time</label>
                  <p className="border rounded-md px-4 py-3 bg-gray-50 text-gray-800">N/A</p>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">Appointment Number</label>
                  <p className="border rounded-md px-4 py-3 bg-gray-50 text-gray-800">N/A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;