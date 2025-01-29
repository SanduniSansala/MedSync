import axios from 'axios';
import apiClient from '../axios/axios';

const BASE_URL = 'http://localhost:8081/doctor';

export interface Doctor {
  docterID: string;
  name: string;
  email: string;
  contactNumber: string;
  specialty: string;
  password: string;
}

export const createDoctor = async (doctor: Doctor) => {
  try {
    const response = await apiClient.post(`${BASE_URL}/create`, doctor);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getDoctorById = async (id: string) => {
  await axios.get<Doctor>(`${BASE_URL}/getById/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllDoctors = async () => {
  await axios.get<Doctor[]>(`${BASE_URL}/getAll`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateDoctor = async (id: string, doctor: Doctor) => {
  await axios.put<Doctor>(`${BASE_URL}/update/${id}`, doctor)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteDoctor = async (id: string) => {
  await axios.delete<string>(`${BASE_URL}/delete/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};