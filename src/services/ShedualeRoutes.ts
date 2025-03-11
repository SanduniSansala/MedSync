import axios from "axios";

const BASE_URL = "http://localhost:8081/shedule";
export interface Sheduale{
  doctorID: string;
  day: string; 
  time: string;
  count: number;
  id?: string;
}

export const updateSheduale = async (id: string, sheduale: Sheduale) => {
  await axios.put(`${BASE_URL}/shedule/update/${id}`, sheduale)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createSchedule = async (sheduale: Sheduale) => {
  await axios.post(`${BASE_URL}/create`, sheduale)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getShedualeById = async (id: string) => {
  await axios.get<Sheduale>(`${BASE_URL}/shedule/getByID/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getShedualeByDoctorId = async (doctorID: string) => {
  await axios.get<Sheduale[]>(`${BASE_URL}/shedule/getByDoctorID/${doctorID}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getShedualeByCustom = async (doctorID: string, day: string, time: string) => {
  await axios.get<Sheduale[]>(`${BASE_URL}/shedule/getByCustom/${doctorID}/${day}/${time}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getScheduleByDoctorName = async (doctorName: string) => {
  try {
      const response = await axios.get(`${BASE_URL}/getByDoctorName/${doctorName}`);
      console.log(response.data);
      return response.data; // Returns the list of schedules
  } catch (error) {
      console.error("Error fetching schedule:", error);
      throw error;
  }
};