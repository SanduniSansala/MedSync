import React from 'react';
import { Calendar, Phone, Clock } from 'lucide-react';

const DoctorProfile = () => {
    const [isAvailable, setIsAvailable] = React.useState(true);
    const [appointmentsCount, setAppointmentsCount] = React.useState(0);
  
    const handleBookAppointment = () => {
      setAppointmentsCount(prev => prev + 1);
    };
  
    const handleAvailability = () => {
      setIsAvailable(prev => !prev);
    };
}