import React from "react";
import image from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Dheader: React.FC = () => {
  const navigate= useNavigate();
  
  return (
    <div>
      <div className="w-full flex justify-center bg-background-color items-center ">
      <div className="flex flex-row container bg-background-color  ">
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
            className=" px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#007E85] to-[#00968d]
                          text-white hover:from-[#00968d] hover:to-[#007E85]
                          transition-all duration-300 shadow-sm hover:shadow-md
                          transform hover:-translate-y-0.5"
            onClick={() => navigate("/Doctor")}
          >
             Home
          </div>
          <div
            className=" px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#007E85] to-[#00968d]
                          text-white hover:from-[#00968d] hover:to-[#007E85]
                          transition-all duration-300 shadow-sm hover:shadow-md
                          transform hover:-translate-y-0.5"
            onClick={() => navigate("/DoctorLogin")}
          >
            Login
          </div>
          <div
            className=" px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#007E85] to-[#00968d]
                          text-white hover:from-[#00968d] hover:to-[#007E85]
                          transition-all duration-300 shadow-sm hover:shadow-md
                          transform hover:-translate-y-0.5"
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
