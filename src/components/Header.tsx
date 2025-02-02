import React from "react";
import image from "../assets/Images/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full flex justify-center bg-background-color items-center h-20 ">
      <div className="flex flex-row container bg-background-color  ">
        <div
          className="basis-1/4 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            className="flex items-center w-[130px]  rounded-xl w-[130px] rounded-xl object-contain hover:shadow-md transition-shadow duration-300"
              src={image}
              alt="logo"
          />
        </div>
        <div className="basis-2/4 flex gap-5 font-semibold cursor-pointer justify-center items-center ">
          <div
            className=" px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#007E85] to-[#00968d]
                          text-white hover:from-[#00968d] hover:to-[#007E85]
                          transition-all duration-300 shadow-sm hover:shadow-md
                          transform hover:-translate-y-0.5"
            onClick={() => navigate("/")}
          >
            Home
          </div>

          <div
            className=" px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#007E85] to-[#00968d]
                          text-white hover:from-[#00968d] hover:to-[#007E85]
                          transition-all duration-300 shadow-sm hover:shadow-md
                          transform hover:-translate-y-0.5"
            onClick={() => navigate("/DoctorChannel")}
          >
            Doctor Channel
          </div>
          <div
            className=" px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#007E85] to-[#00968d]
                          text-white hover:from-[#00968d] hover:to-[#007E85]
                          transition-all duration-300 shadow-sm hover:shadow-md
                          transform hover:-translate-y-0.5"
            onClick={() => navigate("/About")}
          >
            About
          </div>
          <div
            className=" px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#007E85] to-[#00968d]
                          text-white hover:from-[#00968d] hover:to-[#007E85]
                          transition-all duration-300 shadow-sm hover:shadow-md
                          transform hover:-translate-y-0.5"
            onClick={() => navigate("/ContactUs")}
          >
            Contact Us
          </div>
        
        <div
          className="px-4 py-2.5 rounded-lg bg-white text-[#007E85] 
          border-2 border-[#007E85] hover:bg-[#007E85] hover:text-white
          transition-all duration-300 shadow-sm hover:shadow-md
          transform hover:-translate-y-0.5 font-bold text-lg tracking-wide"
          onClick={() => navigate("/PatientLogin")}
        >
          Login
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
