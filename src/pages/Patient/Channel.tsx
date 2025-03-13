import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ChannelCard from "../../components/ChannelCard";

const Channel: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen" style={{
      backgroundImage: "url('https://img.freepik.com/free-photo/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-63452.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }}>
      <Header />
      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-6 border-b pb-2">Channel a Doctor</h1>
          <ChannelCard/>
        </div>
        
        <div className="bg-blue-50/95 backdrop-blur-sm rounded-lg shadow-lg p-6 my-8 flex items-center justify-center">
          <p className="text-2xl px-3 flex items-center justify-center flex-wrap">
            <span className="text-3xl mr-2">📞</span>
            <span className="mr-2">Call</span>
            <a 
              href="tel:+94117990990" 
              className="hover:underline text-red-500 hover:text-blue-900 font-semibold transition-colors duration-300"
            >
              +94 999 999 99
            </a>
            <span className="ml-2">for Agent Assistance</span>
          </p>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Channel;