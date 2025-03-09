import React from "react";
import image from "../assets/images/Logo-Photoroom (1).png";
import { useNavigate } from "react-router-dom";

const Dheader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center bg-gradient-to-r from-blue-500 to-purple-500 items-center shadow-lg">
      <div className="flex flex-row container bg-transparent py-4 px-6">
        <div
          className="basis-1/4 hover:cursor-pointer"
          onClick={() => navigate("/Doctor")}
        >
          <img
            className="flex items-center w-[130px] rounded-xl"
            src={image}
            alt="logo"
          />
        </div>
        <div className="basis-2/4 flex gap-5 font-semibold cursor-pointer justify-center items-center text-white">
          <div
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none"
            onClick={() => navigate("/Doctor")}
          >
            Home
          </div>
          <div
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none"
            onClick={() => navigate("/DoctorLogin")}
          >
            Login
          </div>
          {/* <div
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none"
            onClick={() => navigate("/Form")}
          >
            Register
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dheader;