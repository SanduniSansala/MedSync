import React from 'react'
import {useNavigate} from "react-router-dom"
import apiClient from '../axios/axios';
interface ChannelCard {
    name: string;
    specialty: string;
  }
const ChannelCard:React.FC= () => {
    const navigate= useNavigate();
    const doctors: ChannelCard[] = [
    { name: "Dr. JOHN DOE", specialty: "Cardiologist" },
    { name: "Dr. JANE SMITH", specialty: "Dermatologist" },
    { name: "Dr. ALEX BROWN", specialty: "Pediatrician" },
      ];
  return (
    <div>
        <div className="min-h-screen bg-gray-100 p-4">
      <div className="space-y-4">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-4 border border-gray-200"
          >
            <div className="flex items-start">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="material-icons text-gray-500"></span>
              </div>
              <div className="ml-4">
                <h4 className="text-md font-bold text-primary-color">{doctor.name}</h4>
                <p className="text-gray-700 text-sm">{doctor.specialty}</p>
              </div>
              <button  className="ml-auto bg-primary-color text-white font-semibold py-2 px-4 rounded-md hover:bg-secondary-color" onClick={() => navigate("/Book")} >
                <span className="material-icons text-white mr-2"></span>
                Channel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default ChannelCard
