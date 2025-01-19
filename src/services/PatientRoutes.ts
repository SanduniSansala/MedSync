import axios from "axios";
import { Patient } from "../types/patientTypes";
import apiClient from "../axios/axios";

const BASE_URL = "http://localhost:8080/Patients";


export const createPatient = async (patient: Patient) => {
    apiClient.post('/patient/create', patient).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
}

export const getPatientById = async (id: string) => {
    const response = await axios.get<Patient>(`${BASE_URL}/getById/${id}`);
    return response.data;
}

export const getAllPatients = async () => {
    const response = await axios.get<Patient[]>(`${BASE_URL}/getAll`);
    return response.data;
}

export const updatePatient = async (id: string, patient: Patient) => {
    const response = await axios.put<Patient>(`${BASE_URL}/upload/${id}`, patient);
    return response.data;
}

export const deletePatient = async (id: string) => {
    const response = await axios.delete<string>(`${BASE_URL}/delete/${id}`);
    return response.data;
}
