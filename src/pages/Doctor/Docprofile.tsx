import React from 'react'
import Dheader2 from '../../components/Dheader2'
import Footer from '../../components/Footer'
import {Calendar, Phone, Clock} from 'lucide-react';
import { useNavigate } from 'react-router-dom';



 const Docprofile:React.FC = () => {
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
      <Dheader2/>
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
             <div className="text-center">
             <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
          <img
            src="/api/placeholder/96/96"
            alt="Doctor profile"
            className="rounded-full"
          />
             </div>
             <div>
             <label className="block text-gray-700">Name</label>
              <p className="border rounded px-3 py-2"></p>
              </div>
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
          <div>
        <label className="block text-gray-700">Specialization</label>
        <p className="border rounded px-3 py-2"></p>
            </div> 
          <div>
          
          <label className="block text-gray-700">Phone number</label>
          <p className="border rounded px-3 py-2"></p>
            </div>
           </div>
      </div>
    </div>
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          
        </div> 
            <Footer/>
          
      </div>
    
  )
}
export default Docprofile;