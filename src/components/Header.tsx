import React from "react";
import image from "../assets/Images/Logo-Photoroom (1).png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center bg-gradient-to-r from-blue-500 to-purple-500 items-center shadow-lg">
      <div className="flex flex-row container bg-transparent py-4 px-6">
        <div
          className="basis-1/4 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            className="flex items-center w-[130px] rounded-xl"
            src={image}
            alt="logo"
          />
        </div>
        <div className="basis-2/4 flex gap-5 font-semibold cursor-pointer justify-center items-center text-white">
          <div
            className="hover:text-yellow-300 bg-transparent p-2 rounded-md transition duration-300 ease-in-out"
            onClick={() => navigate("/")}
          >
            Home
          </div>
          <div
            className="hover:text-yellow-300 bg-transparent p-2 rounded-md transition duration-300 ease-in-out"
            onClick={() => navigate("/DoctorChannel")}
          >
            Doctor Channel
          </div>
          <div
            className="hover:text-yellow-300 bg-transparent p-2 rounded-md transition duration-300 ease-in-out"
            onClick={() => navigate("/About")}
          >
            About
          </div>
          <div
            className="hover:text-yellow-300 bg-transparent p-2 rounded-md transition duration-300 ease-in-out"
            onClick={() => navigate("/ContactUs")}
          >
            Contact Us
          </div>
        </div>
        <div className="flex gap-4">
          <div
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none"
            onClick={() => navigate("/PatientLogin")}
          >
            Login
          </div>
          <div
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none"
            onClick={() => navigate("/PatientRegistation")}
          >
            Register
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;