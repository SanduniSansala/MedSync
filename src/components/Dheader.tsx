import React from "react";
import image from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Dheader: React.FC = () => {
  const navigate= useNavigate();
  
  return (
    <div>
      <div className=" flex items-center h-15">
        <div className="w-full flex flex-row container bg-background-color px-5 py-2 ">
          <div className="basis-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer"
          onClick={() => navigate("/Doctor")}>
            <img
              className="flex items-center w-[130px]  rounded-xl w-[130px] rounded-xl object-contain hover:shadow-md transition-shadow duration-300"
              src={image}
              alt="logo"
            />
          </div>
          <div className="basis-2/4 flex gap-5 font-semibold cursor-pointer justify-center items-center ">
          <div
            className=" px-4 py-2.5 rounded-lg bg-white/90 hover:bg-gray-50 
                          hover:text-[#007E85] transition-all duration-300 
                          shadow-sm hover:shadow-md transform hover:-translate-y-0.5
                          flex items-center space-x-1"
            onClick={() => navigate("/Doctor")}
          >
             <span className="text-gray-700 hover:text-[#007E85]">Home</span>
          </div>
          <div
            className=" px-4 py-2.5 rounded-lg bg-white/90 hover:bg-gray-50 
                          hover:text-[#007E85] transition-all duration-300 
                          shadow-sm hover:shadow-md transform hover:-translate-y-0.5
                          flex items-center space-x-1"
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
          
          
        </div>
      </div>
    </div>
  );
};

export default Dheader;
