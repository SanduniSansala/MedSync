import React from "react";
import image from "../assets/Images/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center  items-center">
      <div className="flex flex-row container  bg-gray-300">
        <div
          className="basis-1/4 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            className="flex items-center w-[150px] rounded-xl"
            src={image}
            alt="logo"
          />
        </div>
        <div className="flex flex-grow items-center justify-between">
          <div className="flex space-x-4">
            <button
              className="text-primary-color hover:text-white font-semibold"
              onClick={() => navigate("/")}
            >
              Home
            </button>
            <button
               className="text-primary-color hover:text-white font-semibold"
              onClick={() => navigate("/DoctorChannel")}
            >
              Doctor Channel
            </button>
            <button
               className="text-primary-color hover:text-white font-semibold"
              onClick={() => navigate("/AboutUs")}
            >
              About Us
            </button>
            <button
               className="text-primary-color hover:text-white font-semibold"
              onClick={() => navigate("/ContactUs")}
            >
              Contact Us
            </button>
          </div>
          <div className="flex space-x-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none"
              onClick={() => navigate("/PatientLogin")}
            >
              Login
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none"
              onClick={() => navigate("/PatientRegistation")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
