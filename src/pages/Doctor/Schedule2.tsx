import React, { useState } from "react";
import Dheader from "../../components/Dheader";
import Footer from "../../components/Footer";
import { createSchedule } from "../../services/ShedualeRoutes";

const Schedule2: React.FC = () => {
    // State variables to manage component data
  const [selectedDate, setSelectedDate] = useState<Date>(new Date()); // Stores the selected appointment date
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);// Stores the selected time slot ID
  const [patientCount, setPatientCount] = useState<number>(1);// Stores the number of patients that can be seen
  const [doctorID, setDoctorID] = useState<string>("");
  const [doctorName, setDoctorName] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Predefined time slots with availability
  const timeSlots = [
    { id: 1, time: "09:00 AM", available: 10 },
    { id: 2, time: "03:00 PM", available: 10 },
  ];

 
   //Validates input data and sends schedule information to the backend
  

  const handleSubmit = async () => {
      // Validate doctor information
    if (!doctorID.trim() || !doctorName.trim()) {
      alert("Please enter Doctor ID and Doctor Name.");
      return;
    }

     // Validate date and time slot selection
    if (!selectedSlot || !selectedDate) {
      alert("Please select a date and time slot.");
      return;
    }

      // Find the selected time slot object
    const selectedTime = timeSlots.find((slot) => slot.id === selectedSlot);
    if (!selectedTime) {
      alert("Invalid time slot selected.");
      return;
    }

    // Prepare schedule data for API submission
    const scheduleData = {
      doctorID,
      doctorName,
      day: selectedDate.toISOString().split("T")[0],
      time: selectedTime.time,
      count: patientCount,
    };

    try {
      // Call API to create the schedule
      const response = await createSchedule(scheduleData);
      console.log("Schedule saved:", response);
      alert("Schedul created!");

       // Show success message temporarily
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {

      // Handle API errors
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
    <div>
      <Dheader />

      {/* Main Content Area with Background Image */}
      <div className="min-h-screen bg-cover bg-center flex items-center justify-center p-4 bg-primary-green" 
         style={{
           backgroundImage: 'url("/src/assets/Images/8.jpg")',
           backgroundBlendMode: 'overlay',
           backgroundColor: ''
         }}>

       {/* Schedule Creation Card */}
        <div className="bg-white/80 rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Doctor Appointment Scheduling
            </h1>
          </div>

          {/* Doctor Details Input */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Doctor Details</h3>
            <input
              type="text"
              placeholder="Enter Doctor ID"
              className="w-full p-2 border rounded-md mb-3 focus:ring-2 focus:ring-blue-500"
              value={doctorID}
              onChange={(e) => setDoctorID(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Doctor Name"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
            />
          </div>

          {/* Date Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Select Date</h3>
            <input
              type="date"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={selectedDate.toISOString().split("T")[0]}
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          {/* Time Slots */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Select Time Slot</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
               {/* Map through available time slots */}
              {timeSlots.map((slot) => (
                <button
                  key={slot.id}
                  className={`p-4 border rounded-md text-left transition-colors
                    ${
                      selectedSlot === slot.id
                        ? "bg-blue-500 text-white"
                        : "bg-white hover:bg-gray-50"
                    }
                    ${
                      slot.available === 0
                        ? "opacity-50 cursor-not-allowed"
                        : ""
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
                {/* Options for number of patients */}
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Patient" : "Patients"}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            className={`w-full py-2 px-4 rounded-md text-white font-medium
   ${
     selectedSlot
       ? "bg-blue-500 hover:bg-blue-600"
       : "bg-gray-300 cursor-not-allowed"
   }`}
            disabled={!selectedSlot}
            onClick={handleSubmit}
          >
            Schedule Appointment
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

export default Schedule2;
