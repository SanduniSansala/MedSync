import React, { useEffect, useState } from 'react'
import {getBookingByDoctorName} from "../../services/BookingRoutes";
import { useLocation } from 'react-router-dom';

interface Booking {
    patientEmail: string;
    docterId: string;
    day: string;
    time: string; 
} 

export const BookedList: React.FC = () => {

  const location = useLocation();
  const {doctorID} = location.state || {};
  
    const [booking, setBooking] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchBooking = async () => {
        try {
          const data = await getBookingByDoctorName(doctorID);
          if (Array.isArray(data)) {
            setBooking(data);
          } else {
            setBooking([]);
          }
        } catch (error) {
          console.error("Error fetching doctors:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchBooking();
    }, []);
  
    return (
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Your Booking</h2>
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : booking.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {booking.map((book) => (
              <div key={book.patientEmail} className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-blue-800">Paitient Email <br/>{book.patientEmail}</h3>
                <p className="text-gray-600"><strong>Time Slot:</strong> {book.time}</p>
                <p className="text-gray-600"><strong>Date:</strong> {book.day}</p>
                <div className="flex justify-between mt-4">
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">You are not Booked</p>
        )}
      </div>
    );
  };

export default BookedList;