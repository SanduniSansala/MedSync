import React, { useState } from "react";
import Dheader from "../../components/Dheader";
import Footer from "../../components/Footer";

const Schedule: React.FC = () => {
    // const [selectedDate, setSelectedDate] = useState<string>(
  //   new Date().toISOString().split("T")[0]
  // );
  const [selectedDate, setSelectedDate] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [patientCount, setPatientCount] = useState<number>(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const timeSlots = [
    { id: 1, time: "09:00 AM", available: 20 },
    { id: 2, time: "03:00 PM", available: 20 },
  ];

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    
  ];

  const handleDateChange = (value: string) => {
    if(selectedDate.includes(value)){
      setSelectedDate(selectedDate.filter((date) => date !== value));
      return;
    }
    setSelectedDate([...selectedDate, value]);
  };

  const handleSubmit = () => {
    if (selectedSlot && selectedDate) {
      console.log('Booking details:', {
        date: selectedDate,
        timeSlot: timeSlots.find((slot) => slot.id === selectedSlot),
        patients: patientCount,
      });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <div>
      <Dheader />
      <div className="max-w-4xl mx-auto p-4">
        {/* Simple Card using Tailwind */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Doctor Appointment Scheduling
            </h1>
          </div>

          {/* Date Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Select Date</h3>
            
            <div className="flex flex-wrap gap-3">
              {weekdays.map((day) => (
                <button
                  key={day}
                  className={`p-2 border rounded-md text-left transition-colors 
                    ${
                    selectedDate.includes(day)
                      ? "bg-blue-500 text-white"
                      : "bg-white hover:bg-gray-50"
                  }
                  `}
                  onClick={() => handleDateChange(day)}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* <input
              type="date"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={selectedDate}
              onChange={(e) => handleDateChange(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
             */}
          </div>

          {/* Time Slots */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Select Time Slot</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot.id}
                  className={`p-4 border rounded-md text-left transition-colors ${
                    selectedSlot === slot.id
                      ? "bg-blue-500 text-white"
                      : "bg-white hover:bg-gray-50"
                  } ${
                    slot.available === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={() => setSelectedSlot(slot.id)}
                  disabled={slot.available === 0}
                >
                  <div className="font-medium">{slot.time}</div>
                  <div
                    className={`text-sm ${
                      selectedSlot === slot.id
                        ? "text-blue-100"
                        : "text-gray-500"
                    }`}
                  >
                    {slot.available} slots available
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Patient Count */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Number of Patients</h3>
            <select
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={patientCount}
              onChange={(e) => setPatientCount(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                   {num} {num === 1 ? "Patient" : "Patients"}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              selectedSlot
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!selectedSlot}
            onClick={handleSubmit}
          >
            Schedule
          </button>

          {/* Success Message */}
          {showSuccess && (
            <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-md">
              Appointment scheduled successfully!
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;
