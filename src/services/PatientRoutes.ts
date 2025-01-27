import axios from "axios";
import { Patient } from "../types/patientTypes";
import apiClient from "../axios/axios";

const BASE_URL = "http://localhost:8080/patient";



export const createPatient = async (patient: Patient) => {
    await axios.post(`${BASE_URL}/patient/create`, patient)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const getPatientById = async (id: string) => {
    apiClient.post('/patient/getById/{id}').then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
}

export const getAllPatients = async (patient:Patient) => {
     apiClient.post('/patient/getAll', patient).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
}

export const updatePatient = async (id: string, patient: Patient) => {
    const response = await axios.put<Patient>(`${BASE_URL}/upload/${id}`, patient);
    return response.data;
}

export const deletePatient = async (id: string) => {
    const response = await axios.delete<string>(`${BASE_URL}/delete/${id}`);
    return response.data;
}
