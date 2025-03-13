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
        <div className="min-h-screen bg-gray-100 p-4">
            {error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : schedules.length === 0 ? (
                <p className="text-center text-gray-500">No schedules available</p>
            ) : (
                <div className="space-y-4">
                    {schedules.map((schedule, index) => {
                        console.log("Schedule Data:", schedule);

                        return (
                            <div
                                key={index}
                                className="flex items-center justify-between bg-white shadow-md rounded-md p-4 border border-gray-200"
                            >
                                <div className="text-gray-700">
                                    <p>
                                        <strong>Day:</strong> {schedule.day}
                                    </p>
                                    <p>
                                        <strong>Time:</strong> {schedule.time}
                                    </p>
                                    <p>
                                        <strong>Available Slots:</strong>{" "}
                                        {schedule.count !== undefined ? schedule.count : "N/A"}
                                    </p>
                                </div>
                                
                                {/* Button aligned to the right */}
                                <button
                                    className="ml-auto bg-primary-color text-white font-semibold py-2 px-4 rounded-md hover:bg-secondary-color"
                                    onClick={() => handleDelete(schedule.doctorID, schedule.day , schedule.time)}
                                >
                                    Delete Schedule
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default ViewSchedule;