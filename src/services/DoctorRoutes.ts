import axios from 'axios';
import apiClient from '../axios/axios';

interface LoginResponse {
  message: string;
  // Add other fields as necessary
}
const BASE_URL = 'http://localhost:8081/Doctor';

export interface Doctor {
  doctorID: string;
  name: string;
  email: string;
  contactNumber: string;
  specialty: string;
  password: string;
}

export const createDoctor = async (doctor: Doctor) => {
  try {
    const response = await axios.post('http://localhost:8081/Doctor/create', doctor); // Fix the URL typo
    return response.data;
  } catch (error) {
    console.error('Error creating doctor:', error);
    throw error;
  }
};

export const getDoctorById = async (id: string) => {

  apiClient.get(`/Doctor/getById/${id}`).then((res) => {
    console.log(res.data);
  }).catch((err) => {
    console.log(err);
  })

  // const response = await axios.get<Doctor>(`${BASE_URL}/getById/${id}`);
  // return response.data;
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
export const loginDoctor = async (doctorID: string, password: string): Promise<LoginResponse> => {
  return await axios.post<LoginResponse>(`${BASE_URL}/Login/${doctorID}/${password}`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const loging = async (doctorID: string, password: string) => {
  try {
      const response = await axios.post(`${BASE_URL}/Login/${doctorID}/${password}`);
      console.log("API response:", response); // Debugging
      return response.data; // ✅ Only return response.data, not the whole response object
  } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
};

export const getByspecialty = async (specialty: string): Promise<Doctor[]> => {
  try {
    const response = await axios.get<Doctor[]>(`${BASE_URL}/getByspecialty/${specialty}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching doctors by specialty:", error);
    throw error;
  }
};

export const getAll = async (): Promise<Doctor[]> => {
  try {
    const response = await axios.get<Doctor[]>(`${BASE_URL}/getAll`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching all doctors:", error);
    throw error;
  }
  return [];
};