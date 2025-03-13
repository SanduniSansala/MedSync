import axios from "axios";

const BASE_URL = "http://localhost:8081/Booking";
export interface Booking {
    id?: string;
    patientEmail: string;
    doctorName: string;
    docterId: string;
    day: string;
    time: string;
}


export const getBookings = async () => {
    await axios.get<Booking[]>(`${BASE_URL}/create`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  export const createBooking = async (booking: Booking) => {
    await axios.post(`${BASE_URL}/create`, booking)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  export const getBookingById = async (id: string) => {
    await axios.get<Booking>(`${BASE_URL}/getById/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  export const updateBooking = async (id: string, booking: Booking) => {
    await axios.put<Booking>(`${BASE_URL}/update/${id}`, booking)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  export const deleteBooking = async (id: string) => {
    await axios.delete<string>(`${BASE_URL}/delete/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  export const getBookingByPaitient = async (patientEmail: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/getByPAitentEmail/${patientEmail}`);
        console.log(response.data);
        return response.data; // Returns the list of schedules
    } catch (error) {
        console.error("Error fetching schedule:", error);
        throw error;
    }
  };

  export const getBookingByDoctorName = async (doctorName: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/getByDocterName/${doctorName}`);
        console.log(response.data);
        return response.data; // Returns the list of schedules
    } catch (error) {
        console.error("Error fetching schedule:", error);
        throw error;
    }
  };