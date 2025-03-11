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
                                    onClick={() => navigate("/PatientLogin")}
                                >
                                    Book Appointment
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default BookCard2;