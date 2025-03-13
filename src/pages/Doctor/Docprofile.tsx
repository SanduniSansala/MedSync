import React from 'react'
import Dheader2 from '../../components/Dheader2'
import Footer from '../../components/Footer'
import {Calendar, Phone, Clock} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Info } from "lucide-react";


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
    <div className="min-h-screen bg-gray-50">
    <Dheader2 />
    
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center p-4 bg-primary-green" 
         style={{
           backgroundImage: 'url("/src/assets/Images/8.jpg")',
           backgroundBlendMode: 'overlay',
           backgroundColor: ''
         }}>

    <div className="container mx-auto py-8 px-4 ">
      <div className="w-full max-w-md mx-auto bg-white/60 rounded-xl shadow-lg overflow-hidden">
        {/* Profile header with gradient */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-16 w-full" />
        
        <div className="p-6 relative">
          {/* Profile image */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
              <img
                src="/src/assets/Images/8.jpg"
                alt="Doctor profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          </div>
          
        <div className="text-center mt-16 mb-6">
             <label className="text-blue-600 font-medium">Name</label>
              <p className="border rounded px-3 py-2"></p>
              </div>
       
              
        
          <div className="text-center mb-6">
        <label className="text-blue-600 font-medium">Specialization</label>
        <p className="border rounded px-3 py-2"></p>
            </div> 

            <div className="text-center mb-6">
            <label className="text-blue-600 font-medium">Phone number</label>
          <p className="border rounded px-3 py-2"></p>
            </div>  

            <div className="text-center mb-6">
            <label className="text-blue-600 font-medium">Email</label>
          <p className="border rounded px-3 py-2"></p>
            </div>

            <div className="flex gap-4 items-center justify-center mb-8">
                <button className="bg-gray-200 hover:bg-blue-500 text-gray-800 px-4 py-2 rounded flex items-center">
                  <ArrowRight className="mr-2" size={18} />
                  Add Schedule
                </button>
                <button className="bg-gray-200 hover:bg-blue-500 text-gray-800 px-4 py-2 rounded flex items-center">
                  <Info className="mr-2" size={18} />
                  View Schedule
                </button>
              </div>      
          </div>
      </div>

        </div>
            <Footer/>
          
      </div>
   
  )
}
export default Docprofile;