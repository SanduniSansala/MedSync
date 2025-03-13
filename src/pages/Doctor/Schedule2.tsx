import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Dheader from "../../components/Dheader";
import Footer from "../../components/Footer";
import { createSchedule } from "../../services/ShedualeRoutes";

const Schedule2: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, name } = location.state || {};

  // State variables
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [patientCount, setPatientCount] = useState<number>(1);
  const [showSuccess, setShowSuccess] = useState(false);

  // Predefined time slots
  const timeSlots = [
    { id: 1, time: "06:00 AM - 08:00 AM", available: 10 },
    { id: 2, time: "08:00 PM - 10:00 PM", available: 10 },
  ];

  const handleSubmit = async () => {
    if (!selectedSlot || !selectedDate) {
      alert("Please select a date and time slot.");
      return;
    }
  
    const selectedTime = timeSlots.find((slot) => slot.id === selectedSlot);
    if (!selectedTime) {
      alert("Invalid time slot selected.");
      return;
    }
  
    const scheduleData = {
      doctorID: id,
      doctorName: name,
      day: selectedDate.toISOString().split("T")[0],
      time: selectedTime.time,
      count: patientCount,
    };
  
    try {
      const response = await createSchedule(scheduleData);
      console.log("Schedule Response:", response);
  
      const trimmedResponse = response.trim(); // Remove extra spaces
  
      if (trimmedResponse === "Alredy sheduled this time and date") {
        alert("⚠️ This time slot is already booked. Please choose another time.");
        return;
      }
  
      if (trimmedResponse === "Schedul created!") {
        alert("✅ Schedule created successfully!");
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          navigate("/DocProfile"); // Redirect after success
        }, 2000);
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("❌ Failed to book appointment. Please try again.");
    }
  };
  
  return (
    <div>
      <Dheader />
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center p-4 bg-primary-green"
        style={{
          backgroundImage: 'url("/src/assets/Images/8.jpg")',
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="bg-white/80 rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Doctor Appointment Scheduling
          </h1>

          {/* Doctor Details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Doctor Details</h3>
            <input
              type="text"
              className="w-full p-2 border rounded-md mb-3"
              value={id}
              disabled
            />
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={name}
              disabled
            />
          </div>

          {/* Date Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Select Date</h3>
            <input
              type="date"
              className="w-full p-2 border rounded-md"
              value={selectedDate.toISOString().split("T")[0]}
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
              min={new Date().toISOString().split("T")[0]}
            />
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
                  } ${slot.available === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                  onClick={() => setSelectedSlot(slot.id)}
                  disabled={slot.available === 0}
                >
                  <div className="font-medium">{slot.time}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Patient Count */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Number of Patients</h3>
            <select
              className="w-full p-2 border rounded-md"
              value={patientCount}
              onChange={(e) => setPatientCount(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Patient" : "Patients"}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              selectedSlot ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!selectedSlot}
            onClick={handleSubmit}
          >
            Schedule Appointment
          </button>

          {/* Success Message */}
          {showSuccess && (
            <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-md">
              Appointment scheduled successfully! Redirecting...
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Schedule2;
