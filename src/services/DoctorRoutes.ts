import axios from 'axios';
import apiClient from '../axios/axios';

const BASE_URL = 'http://localhost:8080/doctor';

export interface Doctor {
  docterID: string;
  name: string;
  email: string;
  contactNumber: string;
  specialty: string;
  password: string;
}

export const createDoctor = async (doctor: Doctor) => {
  apiClient.post('/Docter/create', doctor).then((res) => {
    console.log(res.data);
  }).catch((err) => {
    console.log(err);
  })
};

export const getDoctorById = async (id: string) => {
  apiClient.get(`/Docter/getById/${id}`).then((res) => {
    console.log(res.data);
  }).catch((err) => {
    console.log(err);
  })

  // const response = await axios.get<Doctor>(`${BASE_URL}/getById/${id}`);
  // return response.data;
};

export const getAllDoctors = async () => {
  const response = await axios.get<Doctor[]>(`${BASE_URL}/getAll`);
  return response.data;
};

export const updateDoctor = async (id: string, doctor: Doctor) => {
  const response = await axios.put<Doctor>(`${BASE_URL}/update/${id}`, doctor);
  return response.data;
};

export const deleteDoctor = async (id: string) => {
  const response = await axios.delete<string>(`${BASE_URL}/delete/${id}`);
  return response.data;
};