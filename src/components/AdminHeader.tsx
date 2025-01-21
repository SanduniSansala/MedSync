import React from "react";
import image from "../assets/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdminHeader: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  return (
    <div>
      <div className="w-full flex items-center">
        <div className="flex flex-row container bg-background-color px-5 py-2 ">
          <div className="basis-1/4" onClick={() => navigate("/Admin")}>
            <img
              className="flex items-center w-[130px]  rounded-xl"
              src={image}
              alt="logo"
            />
          </div>
          <div className="basis-2/4 flex gap-5 font-semibold cursor-pointer justify-center items-center ">
            <div
              className=" hover:text-[#007E85] bg-white p-2 rounded-md"
              onClick={() => navigate("/Admin")}
            >
              Home
            </div>
            <div
              className="px-4 py-2 rounded-md focus:outline-none hover:text-[#007E85] bg-white p-2 "
              onClick={() => setIsOpen1(!isOpen1)}
            >
              Patient
            </div>

            <div
              className="px-4 py-2 rounded-md focus:outline-none hover:text-[#007E85] bg-white p-2 "
              onClick={() => setIsOpen(!isOpen)}
            >
              Doctor
            </div>
            
          </div>
          <div className="relative">
            {/* Button to toggle dropdown */}

            {/* Dropdown Menu */}
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
                {/* <Link
                  to="/AddDoctor"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Add New Doctor
                </Link> */}
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
    </div>
  );
};

export default AdminHeader;
