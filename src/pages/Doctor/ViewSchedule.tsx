import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getScheduleByDoctorName ,  deleteShedule} from "../../services/ShedualeRoutes";
import { deleteByShedule } from "../../services/BookingRoutes";

export interface Sheduale {
    doctorID: string;
    day: string;
    time: string;
    count: number;
    id?: string;
}

export const ViewSchedule: React.FC = () =>{
    const location = useLocation();

    const {dnames} = location.state || {};
 
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
    }, []);

    const handleDelete = async (doctorID: string, day: string, time: string) => {
        if (window.confirm("Are you sure you want to delete this schedule?")) {
            try {
                await deleteShedule(doctorID, day, time);
                await deleteByShedule(doctorID, day, time);
                alert("Schedule deleted successfully!");
    
                // Remove the deleted schedule from the state
                setSchedules((prev) => prev.filter(s => !(s.doctorID === doctorID && s.day === day && s.time === time)));
            } catch (error) {
                console.error("Error deleting schedule:", error);
                alert("Failed to delete schedule. Please try again.");
            }
        }
    };
    

    return (
        <div className="min-h-screen p-4 md:p-6 lg:p-8 bg-cover bg-center bg-fixed" style={{backgroundImage: 'url("/src/assets/Images/WhatsApp Image 2025-03-13 at 16.49.04_d085376c.jpg")'}}>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Doctor's Schedule</h2>
                {error ? (
                    <p className="text-center text-red-500 bg-red-50 p-4 rounded-lg shadow my-4">{error}</p>
                ) : schedules.length === 0 ? (
                    <div className="text-center py-8 bg-white rounded-lg shadow-md">
                        <p className="text-gray-500 text-lg">No schedules available</p>
                    </div>
                ) : (
                    <div className="space-y-4 max-w-4xl mx-auto">
                        {schedules.map((schedule, index) => {
                            console.log("Schedule Data:", schedule);

                            return (
                                <div
                                    key={index}
                                    className="flex flex-col md:flex-row md:items-center justify-between bg-white shadow-md rounded-md p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="text-gray-700 mb-4 md:mb-0">
                                        <p className="mb-2">
                                            <strong className="text-blue-600">Day:</strong> <span className="font-medium">{schedule.day}</span>
                                        </p>
                                        <p className="mb-2">
                                            <strong className="text-blue-600">Time:</strong> <span className="font-medium">{schedule.time}</span>
                                        </p>
                                        <p>
                                            <strong className="text-blue-600">Available Slots:</strong>{" "}
                                            <span className="font-medium">{schedule.count !== undefined ? schedule.count : "N/A"}</span>
                                        </p>
                                    </div>
                                    
                                    {/* Button aligned to the right */}
                                    <button
                                        className="ml-auto bg-primary-color text-white font-semibold py-2 px-4 rounded-md hover:bg-secondary-color transition-colors duration-300 flex items-center justify-center"
                                        onClick={() => handleDelete(schedule.doctorID, schedule.day , schedule.time)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        Delete Schedule
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

export default ViewSchedule;