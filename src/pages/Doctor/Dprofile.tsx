import React from 'react';
import { Calendar, Phone, Clock } from 'lucide-react';
import Dheader from '../../components/Dheader'
import Footer from '../../components/Footer'
import homeimage from "../../assets/Images/Home.png";

const Dprofile:React.FC = () => {

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
    
            </div>
            <Footer/>
          
        </div>
      )
    }  



    
  
  export default Dprofile;
  
    