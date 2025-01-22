import React from 'react';
import { Calendar, Phone, Clock } from 'lucide-react';
import Dheader from '../../components/Dheader'
import Footer from '../../components/Footer'

const Dprofile:React.FC = () => {
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
        
                </div>   
    
            </div>
            <Footer/>
          
        </div>
      )
    }  



    
  
  export default Dprofile;
  
    