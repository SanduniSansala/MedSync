import axios from "axios";

const BASE_URL = "http://localhost:8080/Bokings";
export interface Booking {
    id?: string;
    paymentMethod: string;
    day: string;
    time: string;
    doctorID?: string;
    patientID?: string;   
}


export const getBookings = async () => {
    await axios.get<Booking[]>(BASE_URL)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  export const createBooking = async (booking: Booking) => {
    await axios.post(BASE_URL, booking)
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