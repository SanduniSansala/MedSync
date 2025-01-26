import axios from "axios";
import { Sheduale } from "../types/shedualeTypes";

const BASE_URL = "http://localhost:8080/Sheduales";

export const updateSheduale = async (id: string, sheduale: Sheduale) => {
    const response = await axios.put(`${BASE_URL}/shedule/update/${id}`, sheduale);
    return response.data;
  } 
export const createSheduale = async (sheduale: Sheduale) => {
    const response = await axios.post(`${BASE_URL}/create`, sheduale);
    return response.data;
}
export const getShedualeById = async (id: string) => {
    const response = await axios.get<Sheduale>(`${BASE_URL}/shedule/getByID/${id}`);
    return response.data;
  };
  export const getShedualeByDoctorId = async (doctorID: string) => {
    const response = await axios.get<Sheduale[]>(`${BASE_URL}/shedule/getByDoctorID/${doctorID}`);
    return response.data;
  };
  export const getShedualeByCustom = async (doctorID: string, day: string, time: string) => {
    const response = await axios.get<Sheduale[]>(`${BASE_URL}/shedule/getByCustom/${doctorID}/${day}/${time}`);
    return response.data;
  };
  export const getAllSheduales = async () => {
    const response = await axios.get<Sheduale[]>(`${BASE_URL}/shedule/getAll`);
    return response.data;
  };
  export const deleteSheduale = async (id: string) => {
    const response = await axios.delete(`${BASE_URL}/shedule/delete/${id}`);
    return response.data;
  };