import React from "react";
import image from "../assets/Images/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full flex justify-center bg-background-color items-center ">
      <div className="flex flex-row container bg-background-color  ">
        <div
          className="basis-1/4 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            className="flex items-center w-[130px]  rounded-xl"
            src={image}
            alt="logo"
          />
        </div>
        <div className="basis-2/4 flex gap-5 font-semibold cursor-pointer justify-center items-center ">
          <div
            className=" hover:text-[#007E85] bg-white p-2 rounded-md"
            onClick={() => navigate("/")}
          >
            Home
          </div>

          <div
            className=" hover:text-[#007E85] bg-white p-2 rounded-md"
            onClick={() => navigate("/DoctorChannel")}
          >
            Doctor Channel
          </div>
          <div
            className=" hover:text-[#007E85] bg-white p-2 rounded-md"
            onClick={() => navigate("/About")}
          >
            About
          </div>
          <div
            className=" hover:text-[#007E85] bg-white p-2 rounded-md"
            onClick={() => navigate("/ContactUs")}
          >
            Contact Us
          </div>
        </div>
        <div
          className="px-4 py-2 bg-primary-color text-white rounded-md hover:bg-secondary-color focus:outline-none"
          onClick={() => navigate("/PatientLogin")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Header;
