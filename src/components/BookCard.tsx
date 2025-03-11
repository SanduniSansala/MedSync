import React from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../axios/axios';

interface BookCard {
  date: string;
  day: string;
  time: string;
  activeAppointments: number;
  availability: string;
}

const BookCard: React.FC = () => {
  const navigate = useNavigate();
  const bookcards: BookCard[] = [
    { date: "May 10, 2025", day: "TUE", time: "09:00 AM", activeAppointments: 2, availability: "AVAILABLE" },
    { date: "April 17, 2025", day: "TUE", time: "09:00 AM", activeAppointments: 0, availability: "AVAILABLE" },
    { date: "April 21, 2025", day: "SAT", time: "09:00 AM", activeAppointments: 1, availability: "AVAILABLE" },
    { date: "May 24, 2025", day: "TUE", time: "09:00 AM", activeAppointments: 0, availability: "AVAILABLE" },
    { date: "August 28, 2025", day: "SAT", time: "09:00 AM", activeAppointments: 1, availability: "AVAILABLE" },
    { date: "July 31, 2025", day: "TUE", time: "09:00 AM", activeAppointments: 0, availability: "AVAILABLE" },
    { date: "April 04, 2025", day: "SAT", time: "09:00 AM", activeAppointments: 0, availability: "AVAILABLE" },
  ];

  const handleBookClick = () => {
    navigate("/PatientLogin");
  };

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
              <div>
                <button
                  className="bg-primary-color text-white font-semibold py-2 px-4 rounded-md hover:bg-secondary-color"
                  onClick={handleBookClick}
                >
                  <span className="material-icons text-white mr-2"></span>
                  Book
                </button>
              </div>
              <span className="text-green-600 font-bold">{appointment.availability}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCard;