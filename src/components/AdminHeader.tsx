import React from "react";
import image from "../assets/images/Logo-Photoroom (1).png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminHeader: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  return (
    <div className="w-full flex justify-center bg-gradient-to-r from-blue-500 to-purple-500 items-center shadow-lg">
      <div className="flex flex-row container bg-transparent py-4 px-6">
        <div
          className="basis-1/4 hover:cursor-pointer"
          onClick={() => navigate("/Admin")}
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
            onClick={() => navigate("/Admin")}
          >
            Home
          </div>
          <div
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none"
            onClick={() => setIsOpen1(!isOpen1)}
          >
            Patient
          </div>
          <div
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            Doctor
          </div>
        </div>
        <div className="relative">
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <Link
                to="/AddDoctor"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Add New Doctor
              </Link>
              <Link
                to="/DoctorList"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                All Registered Doctors
              </Link>
            </div>
          )}
          {isOpen1 && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <Link
                to="/PatientList"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                All Registered Patients
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;