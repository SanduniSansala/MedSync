import React from 'react'
import { useNavigate } from 'react-router-dom'

interface BookCard {
  date: string;
  day: string;
  time: string;
  activeAppointments: number;
  availability: string;
}


const BookCard:React.FC= () => {
  const navigate = useNavigate();
  const bookcards: BookCard[] = [
    { date: "DECEMBER 10, 2024", day: "TUE", time: "09:00 AM", activeAppointments: 2, availability: "AVAILABLE" },
    { date: "DECEMBER 14, 2024", day: "SAT", time: "09:00 AM", activeAppointments: 1, availability: "AVAILABLE" },
    { date: "DECEMBER 17, 2024", day: "TUE", time: "09:00 AM", activeAppointments: 0, availability: "AVAILABLE" },
    { date: "DECEMBER 21, 2024", day: "SAT", time: "09:00 AM", activeAppointments: 1, availability: "AVAILABLE" },
    { date: "DECEMBER 24, 2024", day: "TUE", time: "09:00 AM", activeAppointments: 0, availability: "AVAILABLE" },
    { date: "DECEMBER 28, 2024", day: "SAT", time: "09:00 AM", activeAppointments: 1, availability: "AVAILABLE" },
    { date: "DECEMBER 31, 2024", day: "TUE", time: "09:00 AM", activeAppointments: 0, availability: "AVAILABLE" },
    { date: "JANUARY 04, 2025", day: "SAT", time: "09:00 AM", activeAppointments: 0, availability: "AVAILABLE" },
  ];
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-4">
      <div className="space-y-4">
        {bookcards.map((appointment, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white shadow-md rounded-md p-4 border border-gray-200"
          >
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm">{appointment.date}</span>
              <span className="text-primary-color font-bold text-lg">
                {appointment.day} {appointment.time}
              </span>
              <div></div>
              <span className="text-gray-500 text-xs">ACTIVE APPOINTMENTS</span>
              <span className="text-primary-color font-bold">{appointment.activeAppointments.toString().padStart(2, '0')}</span>
            </div>
            <div  >
            <button className="bg-primary-color text-white font-semibold py-2 px-4 rounded-md hover:bg-secondary-color"  onClick={() => navigate("/PatientRegistration")}>
              <span className="material-icons text-white mr-2" ></span>
              Book 
            </button></div>
            
            <span className="text-green-600 font-bold">{appointment.availability}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default BookCard
