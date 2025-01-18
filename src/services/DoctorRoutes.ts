import axios from "axios";
import { Doctor } from "../types/doctorTypes";
import apiClient from "../axios/axios";

const BASE_URL = "http://localhost:8080/Doctors";

export const createDoctor = async (doctor: Doctor) => {

    apiClient.post('/Docter/create', doctor).then((res) => {
        return res.data;
    }).catch((err) => {
        console.log(err);
    })

    // const response = await axios.post(`${BASE_URL}/create`, doctor);
    // return response.data;
}

export const getDoctorById = async (id: string) => {
    const response = await axios.get<Doctor>(`${BASE_URL}/getById/${id}`);
    return response.data;
}

export const getAllDoctors = async () => {
    const response = await axios.get<Doctor[]>(`${BASE_URL}/getAll`);
    return response.data;
}

export const updateDoctor = async (id: string, doctor: Doctor) => {
    const response = await axios.put<Doctor>(`${BASE_URL}/update/${id}`, doctor);
    return response.data;
}

export const deleteDoctor = async (id: string) => {
    const response = await axios.delete<string>(`${BASE_URL}/delete/${id}`);
    return response.data;
}