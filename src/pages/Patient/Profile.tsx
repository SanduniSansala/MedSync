import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getPatientByEmail, updatePatient } from '../../services/PatientRoutes';
import { Patient } from '../../types/patientTypes';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [patient, setPatient] = useState<Patient | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Patient>({
    name: '',
    age: 0,
    email: '',
    contactNo: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const response = await getPatientByEmail("induwaraaaaa@gmail.com");
        setPatient(response);
        setFormData(response || { name: '', age: '', email: '', contactNo: '' });
      } catch (error) {
        console.error('Error fetching patient details:', error);
      }
    };
    fetchPatientDetails();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      await updatePatient(formData.email, formData);
      setPatient(formData);
      setIsModalOpen(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error('Error updating patient:', error);
      alert("Failed to update profile. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col" 
         style={{
           backgroundImage: 'url("/src/assets/Images/8.jpg")',
           backgroundSize: "cover",
           backgroundPosition: "center",
           backgroundAttachment: "fixed"
         }}>
      <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm"></div>
      
      <Header />
      
      <div className="flex-grow flex items-center justify-center p-4 md:p-8 relative z-10">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl max-w-md w-full p-8 border border-blue-100 transition-all duration-300 hover:shadow-blue-200">
          <div className="text-center mb-8">
            <div className="h-24 w-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">
                {patient?.name ? patient.name.charAt(0).toUpperCase() : '?'}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-blue-800 mb-1">Patient Profile</h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mt-2 rounded-full"></div>
          </div>
          
          {patient ? (
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <p className="text-blue-600 font-semibold">Name:</p>
                  <p className="text-gray-900 font-medium">{patient.name}</p>
                  
                  <p className="text-blue-600 font-semibold">Age:</p>
                  <p className="text-gray-900 font-medium">{patient.age}</p>
                  
                  <p className="text-blue-600 font-semibold">Email:</p>
                  <p className="text-gray-900 font-medium break-words">{patient.email}</p>
                  
                  <p className="text-blue-600 font-semibold">Contact:</p>
                  <p className="text-gray-900 font-medium">{patient.contactNo}</p>
                </div>
              </div>

              <div className="flex flex-col space-y-4 mt-8">
                <button
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center"
                  onClick={() => setIsModalOpen(true)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Update Profile
                </button>
                <button
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center"
                  onClick={() => navigate("/BookingList", { state: { paitienEmail: patient.email } })}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  View Booking Details
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center p-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              <p className="ml-3 text-blue-600 font-medium">Loading patient details...</p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />

      {/* Modal for updating profile */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-xl shadow-2xl max-w-md w-full border border-blue-100 animate-fadeIn">
            <h3 className="text-2xl font-bold text-blue-800 text-center mb-6">Edit Profile</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Age"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  disabled
                  className="w-full border border-gray-300 p-3 rounded-lg bg-gray-100 cursor-not-allowed"
                />
                <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                <input
                  type="text"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button 
                className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-3 rounded-lg font-medium transition shadow-sm hover:shadow-md flex items-center" 
                onClick={() => setIsModalOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Cancel
              </button>
              <button 
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-medium transition shadow-sm hover:shadow-md flex items-center" 
                onClick={handleUpdate}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;