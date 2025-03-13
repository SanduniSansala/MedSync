import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getScheduleByDoctorName } from "../services/ShedualeRoutes";

// Define the Sheduale interface
export interface Sheduale {
    doctorID: string;
    day: string;
    time: string;
    count: number;
    id?: string;
}

const BookCard2: React.FC = () => {
    const location = useLocation();
    const { dnames } = location.state || {};
    
    const navigate = useNavigate();
    const [schedules, setSchedules] = useState<Sheduale[]>([]);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getScheduleByDoctorName(dnames);
                console.log("Fetched Data:", data);
                
                if (Array.isArray(data)) {
                    setSchedules(data);
                } else if (data.schedules) {
                    setSchedules(data.schedules);
                } else {
                    setError("Invalid data format received from API.");
                }
            } catch (error) {
                console.error("Error fetching schedule:", error);
                setError("Failed to fetch schedule.");
            }
        };
        
        fetchData();
    }, [dnames]);
    
    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" 
             style={{ backgroundImage: 'url("/src/assets/Images/WhatsApp Image 2025-03-13 at 16.49.04_d085376c.jpg")' }}>
            <div className="max-w-3xl w-full space-y-8 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl">
                <div className="text-center">
                    <h2 className="mt-6 text-4xl font-bold text-gray-900 tracking-tight">
                        Available Appointments
                    </h2>
                    <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                        Book an appointment with <span className="font-semibold text-blue-600"> {dnames}</span>
                    </p>
                    <div className="mt-4 h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
                </div>
                
                {error ? (
                    <div className="text-center p-6 bg-red-100 border border-red-400 text-red-700 rounded-md">
                        <p>{error}</p>
                    </div>
                ) : schedules.length === 0 ? (
                    <div className="text-center p-6 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md">
                        <p>No schedules available for this doctor.</p>
                    </div>
                ) : (
                    <div className="space-y-6 mt-8">
                        {schedules.map((schedule, index) => {
                            console.log("Schedule Data:", schedule);
                            
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col sm:flex-row sm:items-center justify-between bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-blue-300"
                                >
                                    <div className="text-gray-700 mb-4 sm:mb-0">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="flex items-center">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                                <p className="text-base font-medium text-gray-500">Day:</p>
                                            </div>
                                            <p className="text-base font-bold">{schedule.day}</p>
                                            
                                            <div className="flex items-center">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                                <p className="text-base font-medium text-gray-500">Time:</p>
                                            </div>
                                            <p className="text-base font-bold">{schedule.time}</p>
                                            
                                            <div className="flex items-center">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                                <p className="text-base font-medium text-gray-500">Available:</p>
                                            </div>
                                            <p className="text-base font-bold">
                                                {schedule.count !== undefined ? (
                                                    schedule.count > 0 ? (
                                                        <span className="text-green-600 bg-green-50 px-2 py-1 rounded-full">{schedule.count} slots</span>
                                                    ) : (
                                                        <span className="text-red-600 bg-red-50 px-2 py-1 rounded-full">Fully booked</span>
                                                    )
                                                ) : (
                                                    "N/A"
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <button
                                        className={`w-full sm:w-auto mt-4 sm:mt-0 py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105
                                            ${schedule.count > 0 
                                                ? "bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg" 
                                                : "bg-gray-400 cursor-not-allowed"}`}
                                        onClick={() => navigate("/PatientLogin", {
                                            state: {
                                                id: schedule.doctorID,
                                                name: dnames,
                                                day: schedule.day,
                                                time: schedule.time
                                            }
                                        })}
                                        disabled={schedule.count <= 0}
                                    >
                                        {schedule.count > 0 ? "Book Appointment" : "Unavailable"}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookCard2;