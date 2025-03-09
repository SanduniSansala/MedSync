import axios from "axios";

const BASE_URL = "http://localhost:8081/Admin";

export interface Admin {
    adminId: string;
    password: string;
}

export const createDoctorAdmin = async (doctorAdmin: Admin) => {
    await axios.post(`${BASE_URL}/create`, doctorAdmin)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  export const getAdminById = async (id: string) => {
    await axios.get<Admin>(`${BASE_URL}/getById/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  export const getAllAdmin = async () => {
    await axios.get<Admin[]>(`${BASE_URL}/getAll`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  export const updateAdmin = async (id: string, doctorAdmin: Admin) => {
    await axios.put<Admin>(`${BASE_URL}/update/${id}`, doctorAdmin)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  export const deleteAdmin = async (id: string) => {
    await axios.delete<string>(`${BASE_URL}/delete/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Login endpoint (for adminId and password)
  
  export const loging = async (adminId: string, password: string) => {
    try {
        const response = await axios.post(`${BASE_URL}/Login/${adminId}/${password}`);
        console.log("API response:", response); // Debugging
        return response.data; // ✅ Only return response.data, not the whole response object
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};