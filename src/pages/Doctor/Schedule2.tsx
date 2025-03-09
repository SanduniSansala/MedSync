
import React, { useState } from 'react';

const Schedule2 = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [patientCount, setPatientCount] = useState<number>(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const timeSlots = [
    { id: 1, time: "09:00 AM", available: 10 },
    { id: 2, time: "10:00 AM", available: 8 },
   ];

   const handleSubmit = () => {
    if (selectedSlot && selectedDate) {
      console.log('Booking details:', {
        date: selectedDate,
        timeSlot: timeSlots.find(slot => slot.id === selectedSlot),
        patients: patientCount
      });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }

  }
  return (
    <div className="max-w-4xl mx-auto p-4">

    </div>
  )
}
export default Schedule2;