import React, { useState, useEffect } from "react";
import Dheader from "../../components/Dheader";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { 
  LogIn, 
  Stethoscope, 
  PlusCircle, 
  BookOpen, 
  Shield, 
  Users, 
  Clock, 
  Database ,ChevronLeft, ChevronRight,
} from "lucide-react";

const Doctor: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying] = useState(true);

  const images = [
    "/src/assets/Images/IMG-20250207-WA0039.jpg",
    "/src/assets/Images/IMG-20250207-WA0040.jpg",
    "/src/assets/Images/10.jpg",
  ];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
  
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex(prevIndex => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
  
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };


  const doctorFeatures = [
    {
      icon: Stethoscope,
      title: "Advanced Medical Tools",
      description: "Access cutting-edge medical technology and diagnostic tools."
    },
    {
      icon: Database,
      title: "Comprehensive Patient Records",
      description: "Seamless electronic health record management system."
    },
    {
      icon: Users,
      title: "Patient Management",
      description: "Efficient scheduling and patient tracking capabilities."
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Dheader />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="flex h-full">
              {images.map((src, index) => (
                <div key={index} className="min-w-full h-full relative">
                  <img 
                    src={src} 
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />

<div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-4">
                      <h1 className="text-5xl font-bold mb-6 animate-fadeIn">Welcome to MedSync</h1>
                      <p className="text-2xl mb-8 text-gray-200">Discover exceptional healthcare with our expert medical team</p>
                      <button 
                        onClick={() => navigate("/DoctorChannel")}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full hover:bg-white transition-colors shadow-lg hover:scale-110 duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full hover:bg-white transition-colors shadow-lg hover:scale-110 duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>



          {/* Dot Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

      {/* About MedSync for Doctors */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose MedSync?
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              MedSync is committed to transforming healthcare delivery through 
              innovative technology and comprehensive support for medical professionals.
            </p>
            <ul className="space-y-3 mb-6 text-gray-600">
              <li className="flex items-center">
                <Shield className="w-5 h-5 mr-3 text-green-500" />
                Secure and HIPAA Compliant Platform
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-blue-500" />
                24/7 Technical Support
              </li>
              <li className="flex items-center">
                <BookOpen className="w-5 h-5 mr-3 text-purple-500" />
                Continuous Medical Education Resources
              </li>
            </ul>
            <button 
              onClick={() => navigate("/DoctorProfile")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Set Up Your Profile
            </button>
          </div>
          <div>
            <img 
              src="../../assets/Images/medical-technology.jpg" 
              alt="Medical Technology"
              className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Quick Doctor Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center hover:bg-blue-100 transition-colors">
              <PlusCircle className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-3">Add Patient</h3>
              <button 
                onClick={() => navigate("/AddPatient")}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Create New Record
              </button>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center hover:bg-green-100 transition-colors">
              <Stethoscope className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-3">Patient Consultation</h3>
              <button 
                onClick={() => navigate("/Consultations")}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Start Consultation
              </button>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl text-center hover:bg-purple-100 transition-colors">
              <LogIn className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-3">Manage Profile</h3>
              <button 
                onClick={() => navigate("/DoctorProfile")}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Update Information
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    
      
    </div>
  );
};

export default Doctor;