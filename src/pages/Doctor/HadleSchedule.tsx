import React from 'react';
import Dheader from '../../components/Dheader';
import Footer from "../../components/Footer";
import { ArrowRight, Info } from "lucide-react";

const HadleSchedule: React.FC = () => {
  return (
    <div>
      <Dheader />
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }}
      >
        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center">
            <ArrowRight className="mr-2" size={18} />
            Start Now
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded flex items-center">
            <Info className="mr-2" size={18} />
            Learn More
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HadleSchedule;