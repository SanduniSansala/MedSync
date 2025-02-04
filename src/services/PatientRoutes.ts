import axios from "axios";
import apiClient from "../axios/axios";

const BASE_URL = "http://localhost:8081/patient";

export interface Patient{
    id?: string;
    name: string;
    email: string;
    nic: string;
    password: string;
    contactNo: string;
  }


export const createPatient = async (patient: Patient) => {
    await axios.post('http://localhost:8081/patient/create', patient)
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

export const getAllPatients = async () => {
    await apiClient.get(`${BASE_URL}/getAll`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  export const updatePatient = async (id: string, patient: Patient) => {
    await apiClient.put(`${BASE_URL}/update/${id}`, patient)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  export const deletePatient = async (id: string) => {
    await apiClient.delete(`${BASE_URL}/delete/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };