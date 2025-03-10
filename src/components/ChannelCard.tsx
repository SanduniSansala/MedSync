import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface Doctor {
  name: string;
  specialty: string;
  email?: string;
  contactNumber?: string;
  // Add additional fields as needed
}

interface LocationState {
  doctors: Doctor[];
  specialty?: string;
  doctorName?: string;
}

const ChannelCard: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | null;
  const doctors = state?.doctors || [];

  if (!doctors || doctors.length === 0) {
    return <p className="text-center p-4">No doctor data available.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="space-y-4">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-4 border border-gray-200 flex items-center"
          >
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="material-icons text-gray-500">person</span>
            </div>
            <div className="ml-4">
              <h4 className="text-md font-bold text-primary-color">{doctor.name}</h4>
              <p className="text-gray-700 text-sm">{doctor.specialty}</p>
              {doctor.email && (
                <p className="text-gray-600 text-xs">{doctor.email}</p>
              )}
              {doctor.contactNumber && (
                <p className="text-gray-600 text-xs">{doctor.contactNumber}</p>
              )}
            </div>
            <button
              className="ml-auto bg-primary-color text-white font-semibold py-2 px-4 rounded-md hover:bg-secondary-color"
              onClick={() => navigate("/Book")}
            >
              <span className="material-icons text-white mr-2"></span>
              Channel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelCard;
