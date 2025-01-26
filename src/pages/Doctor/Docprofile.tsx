import React from 'react'
import Dheader from '../../components/Dheader'
import Footer from '../../components/Footer'
import {Calendar, Phone, Clock} from 'lucide-react';
import { useNavigate } from 'react-router-dom';



export const Docprofile:React.FC = () => {
  const [isAvailable, setIsAvailable] = React.useState(true);
  const [appointmentsCount, setAppointmentsCount] = React.useState(0);

  const handleBookAppointment = () => {
      setAppointmentsCount(prev => prev + 1);
    };
  
    const handleAvailability = () => {
      setIsAvailable(prev => !prev);
    };

  return (
    <div>
      <Dheader/>
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
             <div className="text-center">
             <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
          <img
            src="/api/placeholder/96/96"
            alt="Doctor profile"
            className="rounded-full"
          />
             </div>
             <h2 className="text-2xl font-bold mb-1">Dr. Sarah Johnson</h2>
        <p className="text-gray-600 mb-2">Cardiologist</p>
        <div className="mb-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
            isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {isAvailable ? 'Available' : 'Unavailable'}
          </span>
        </div>
     </div>
     <div className="space-y-6">
        <div className="space-y-2">
          <p className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            Practice: 15+ years
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <Phone className="w-4 h-4" />
            Contact: (555) 123-4567
          </p>
        </div>
        <button 
            onClick={handleAvailability}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Clock className="w-4 h-4" />
            Toggle Status
          </button>
          
          <button 
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Contact
          </button>
        </div>
    </div>
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Statistics</h3>
          <p>Total Appointments: {appointmentsCount}</p>
          <p>Current Status: {isAvailable ? 'Taking Patients' : 'Not Available'}</p>
        </div> 
            <Footer/>
          
      </div>
    
  )
}
export default Docprofile;