import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {ChevronLeft, ChevronRight, Building2, User, Award,} from "lucide-react";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying] = useState(true);

  const images = [
    "/src/assets/Images/8.jpg",
    "/src/assets/Images/9.jpg",
    "/src/assets/Images/10.jpg",
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
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

  return (
    <div>
      <Header />

    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Carousel */}
      <div className="relative h-[600px] w-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
    <div className="flex h-full">
            {images.map((src, index) => (
              <div
                key={index}
                className="min-w-full h-full relative"
              >
              <img src={src} alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h2 className="text-4xl font-bold mb-4">Welcome to MedSync</h2>
                    <p className="text-xl mb-6">Discover amazing content and features</p>
                    <button className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-900 shadow-lg transition-all duration-300 hover:bg-teal-50">
          Get Started
          <svg 
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
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
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
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


        {/* Content Sections */}
{/* 
        <div className="container mx-auto px-4 -mt-20 relative z-30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
            <div className="p-6 border-b-4 border-blue-500">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
                  <svg
                    onClick={() => navigate("/DoctorChannel") }
                    className="w-6 h-6 text-blue-500 group-hover:text-white hover:cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Meet Our Doctors
                </h2>
              </div>
              <p className="text-gray-600">
                The medical team at MedSync provides the highest quality
                healthcare for patients.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
            <div className="p-6 border-b-4 border-green-500">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-500 transition-colors duration-300">
                  <svg
                    onClick={() => navigate("/About") }
                    className="w-6 h-6 text-green-500 group-hover:text-white hover:cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  About MedSync
                </h2>
              </div>
              <p className="text-gray-600">
                Our focus on patient care, research, education and prevention
                helps make healthier today and happier tomorrow.
              </p>
            </div>
          </div>

          <div className="bg-purple rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
            <div className="p-6 border-b-4 border-purple-500">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-500 transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-purple-500 group-hover:text-white hover:cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Awards & Recognition
                </h2>
              </div>
              <p className="text-gray-600">
                The clinical excellence at MedSync has been awarded several
                prestigious designations in Patiens's health.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Content Sections */}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
  {/* Meet Our Doctors Section */}
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group border-b-4 border-blue-500">
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
          <User className="w-6 h-6 text-blue-500 group-hover:text-white hover:cursor-pointer" onClick={() => navigate("/DoctorChannel")}/>
        </div>
        <h2 className="text-xl font-bold text-gray-800 hover:cursor-pointer" onClick={() => navigate("/DoctorChannel")}>Meet Our Doctors</h2>
      </div>
      <p className="text-gray-600">
        The medical team at MedSync provides the highest quality healthcare for patients.
      </p>
    </div>
  </div>

  {/* About MedSync Section */}
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group border-b-4 border-green-500">
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-500 transition-colors duration-300">
          <Building2 className="w-6 h-6 text-green-500 group-hover:text-white hover:cursor-pointer" onClick={() => navigate("/About")}/>
        </div>
        <h2 className="text-xl font-bold text-gray-800 hover:cursor-pointer" onClick={() => navigate("/About")}>About MedSync</h2>
      </div>
      <p className="text-gray-600">
        Our focus on patient care, research, education and prevention helps make healthier today and happier tomorrow.
      </p>
    </div>
  </div>

  {/* Awards Section */}
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group border-b-4 border-purple-500">
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-500 transition-colors duration-300">
          <Award className="w-6 h-6 text-purple-500 group-hover:text-white hover:cursor-pointer" />
        </div>

        <p className="text-purple-800">
          The clinical excellence at MedSync has been awarded several prestigious designations in Patiens's health .
          
        </p>

        <h2 className="text-xl font-bold text-gray-800 hover:cursor-pointer">Awards & Recognition</h2>

      </div>
       <p className="text-gray-600">
        The clinical excellence at MedSync has been awarded several prestigious designations in Patients' health.
      </p> 
    </div>
  </div>
</div>
       </div>

      <Footer />
    </div>
  );
};

export default Home;
