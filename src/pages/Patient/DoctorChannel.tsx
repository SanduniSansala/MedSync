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
    <div>
      <Header />

      <div
        className="flex justify-center items-center h-screen bg-gray-100 bg-cover "
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="bg-white shadow-lg rounded-lg p-6 w-96">
          <h2 className="text-2xl font-semibold text-center text-primary-color mb-4">
            Channel Your Doctor
          </h2>
          <form
            className="space-y-4 focus:outline-none  focus:ring-secondary-color focus:border-secondary-color"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                <span className="flex items-center">Specialization</span>
              </label>
              <select
                className="w-full border border-gray-300 rounded-md py-2 px-3 "
                name="name"
              >
                <option>Select</option>
                <option>Specialization</option>
              </select>

              <br />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                <span className="flex items-center">Doctor</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md py-2 px-3"
                name="special"
                placeholder="Enter doctor's name"
              />
              <br />
              <br />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-color text-white font-semibold py-2 px-4 rounded-md hover:bg-secondary-color"
            >
              <span className="material-icons mr-2 "></span> Search
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DoctorChannel;
