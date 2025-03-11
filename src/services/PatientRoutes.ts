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

// Removed duplicate getAll function
  
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

  export const loging = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${BASE_URL}/loging/${email}/${password}`);
        console.log("API response:", response); // Debugging
        return response.data; // ✅ Only return response.data, not the whole response object
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};
export const getAll = async () => {
  try {
    const response = await apiClient.get(`${BASE_URL}/getAll`);
    return response.data; // ✅ Return the data
  } catch (error) {
    console.error("Error fetching patients:", error);
    return []; // ✅ Return empty array on error
  }
};
export const getPatientByEmail = async (email: string) => {
  try {
    const response = await axios.get<Patient>(`${BASE_URL}/getByEmail/${email}`);
    console.log("Fetched patient data:", response.data);
    return response.data; // ✅ Return patient details
  } catch (error) {
    console.error("Error fetching patient by email:", error);
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
      const response = await axios.post(`${BASE_URL}/loging/${email}/${password}`);
      
      if (response.data) {
          localStorage.setItem("userEmail", email); // ✅ Store user email in localStorage
          console.log("User logged in:", response.data);
      }
      
      return response.data; 
  } catch (error) {
      console.error("Login Error:", error);
      throw error;
  }
};
