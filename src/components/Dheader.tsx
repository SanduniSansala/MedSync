import React from "react";
import image from "../assets/images/logo.png";
import {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dheader: React.FC = () => {
  const navigate= useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <div className="w-full flex items-center">
        <div className="flex flex-row container bg-background-color px-5 py-2 ">
          <div className="basis-1/4">
            <img
              className="flex items-center w-[130px]  rounded-xl"
              src={image}
              alt="logo"
            />
          </div>
          <div className="basis-2/4 flex gap-5 font-semibold cursor-pointer justify-center items-center ">
          <div
            className=" hover:text-[#007E85] bg-white p-2 rounded-md"
            onClick={() => navigate("/DHome")}
          >
            Home
          </div>
          <div
            className=" hover:text-[#007E85] bg-white p-2 rounded-md"
            onClick={() => navigate("/DoctorLogin")}
          >
            Login
          </div>
          <div
            className=" hover:text-[#007E85] bg-white p-2 rounded-md"
            onClick={() => navigate("/Form")}
          >
            Register
          </div>
          </div>
          <div className="relative">
      {/* Button to toggle dropdown */}
      <button
        className="px-4 py-2 bg-primary-color text-white rounded-md hover:bg-secondary-color focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        User
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
          <Link
            to="/"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Patient
          </Link>
          <Link
            to="/Dhome"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Doctor
          </Link>
          <Link
            to="/AHome"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Admin
          </Link>
          
        </div>
      )}
      
    </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dheader;
