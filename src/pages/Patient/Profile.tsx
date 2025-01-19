import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useLocation } from 'react-router-dom';

interface PatientInfo {
  Name: string;
  email: string;
  phone: string;
  nic: string;
  password: string;
}

const Profile: React.FC = () => {
  const location = useLocation();
  const patientInfo = location.state as PatientInfo;

  
  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto mt-10 px-6 py-8 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-bold text-center mb-4">Profile</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <p className="border rounded px-3 py-2">{patientInfo.Name}</p>
            </div>
            <div>
              <label className="block text-gray-700">Phone number</label>
              <p className="border rounded px-3 py-2">{patientInfo.phone}</p>
            </div>
            <div>
              <label className="block text-gray-700">NIC</label>
              <p className="border rounded px-3 py-2">{patientInfo.nic}</p>
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <p className="border rounded px-3 py-2">{patientInfo.email}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;