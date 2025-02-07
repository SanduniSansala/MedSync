import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {ChevronLeft, ChevronRight, Building2, User, Award , Heart, Clock, UserCheck} from "lucide-react";

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
    <div className="bg-gray-50">
     <Header />

      <div className="min-h-screen">
      {/* Hero Section with Carousel */}
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

{/* Stats Section */}
<div className="bg-white py-12 shadow-md">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">10,000+</h3>
              <p className="text-gray-600">Satisfied Patients</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <UserCheck className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">50+</h3>
              <p className="text-gray-600">Expert Doctors</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">24/7</h3>
              <p className="text-gray-600">Available Support</p>
            </div>
          </div>
        </div>

        {/* New Body Section with Image and Text */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src="/src/assets/Images/11.jpg" 
                  alt="Medical Team" 
                  className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl hidden md:block">
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose MedSync?</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At MedSync, we believe in providing exceptional healthcare services that put our patients first. 
                  Our state-of-the-art facilities, combined with our team of experienced medical professionals, 
                  ensure that you receive the highest standard of care.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We offer comprehensive medical services, from routine check-ups to specialized treatments, 
                  all designed to meet your unique healthcare needs. Our patient-centered approach means 
                  you'll always receive personalized attention and care.
                </p>
                <button 
                  onClick={() => navigate("/About")}
                  className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Learn More About Us
                </button>
              </div>
            </div>
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
       
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-6xl mx-auto">
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
          The clinical excellence at MedSync has been awarded several prestigious designations in Patiens's health.
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
