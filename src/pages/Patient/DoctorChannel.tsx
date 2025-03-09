import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import bgimg from "../../assets/images/1.png";

const DoctorChannel: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //stop refresh page
    e.preventDefault();
    console.log(e);
    const formData = new FormData(e.target as HTMLFormElement);

    // api
    const data = {
      name: formData.get("name"),
      special: formData.get("special"),
    };
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/doctor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error("Error fetching data:", err));
    //api

    const name = formData.get("name");
    console.log(name);
    const special = formData.get("special");
    console.log(special);
    if (name == "Select" && special == "Select") {
      Swal.fire({
        title: "Oops!",
        text: "Please select any option",
        confirmButtonText: "OK",
        confirmButtonColor: "#6eab36", // Orange color
      });
    } else if (name != "Select") {
      navigate("/DoctorChannel/Channel");
    } else {
      navigate("/Book");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex flex-col">
      <Header />
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center p-4 bg-primary-green"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "",
        }}
      >
        <div className="bg-white/30 backdrop-blur-sm rounded-xl shadow-2xl max-w-md w-full p-8 border border-blue-100">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">
              Channel Your Doctor
            </h2>
            <p className="text-gray-600">Find the best doctors for you</p>
          </div>

          <form
            className="space-y-6 focus:outline-none focus:ring-secondary-color focus:border-secondary-color"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                <span className="flex items-center">Specialization</span>
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                name="name" 
              >
                <option>Select</option>
                <option>Cardiology</option>
                <option>Dermatology</option>
                <option>Neurology</option>
                <option>Oncologist</option>

              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                <span className="flex items-center">Doctor</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                name="special"
                placeholder="Enter doctor's name"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-md hover:shadow-lg"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorChannel;