import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ChannelCard from "../../components/ChannelCard";

const Channel: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen animate-gradient-x" style={{
      backgroundImage: 'url("/src/assets/Images/WhatsApp Image 2025-03-13 at 16.49.04_d085376c.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }}>
      <Header />
      
      <main className="flex-grow container mx-auto py-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 mb-8 border border-blue-100">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-b pb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Channel a Doctor
            </h1>
            <div className="transform transition duration-300 hover:scale-[1.01]">
              <ChannelCard/>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50/95 to-indigo-50/95 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 my-8 flex flex-col md:flex-row items-center justify-center border border-blue-100 hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-100 rounded-full p-4 mb-4 md:mb-0 md:mr-6 flex-shrink-0 shadow-inner">
              <span className="text-4xl">📞</span>
            </div>
            <p className="text-xl md:text-2xl px-3 flex items-center justify-center flex-wrap text-center md:text-left">
              <span className="mr-2 font-medium text-gray-700">Call</span>
              <a 
                href="tel:+94117990990" 
                className="group relative inline-block hover:underline text-red-500 hover:text-blue-900 font-semibold transition-colors duration-300"
              >
                +94 999 999 99
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <span className="ml-2 text-gray-700">for Agent Assistance</span>
            </p>
          </div>
          
          <div className="text-center mt-8 mb-4 opacity-90 hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm text-gray-600">
              Our doctors are available 24/7 to provide you with the best medical care
            </p>
          </div>
        </div>
      </main>
      
      <Footer/>
    </div>
  );
};

export default Channel;