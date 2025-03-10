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
<div className="bg-gray-300 py-12 shadow-md">
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
       
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-6xl mx-auto">
  {/* Meet Our Doctors Section */}
  
       <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
       <div className="p-6 border-b-4 border-blue-500">
              <div className="flex items-center space-x-4 mb-4">
              <div className="p-4 bg-blue-100 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
              <User className="w-8 h-8 text-blue-500 group-hover:text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">About Team</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
              The medical team at MedSync provides the highest quality healthcare for patients.
              Schedule an appointment now.
              </p>
              <button 
                onClick={() => navigate("/DoctorChannel")}
                className="mt-4 text-blue-500 hover:text-blue-600 font-semibold flex items-center group"
              >
                Learn More 
                <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>   

  {/* About MedSync Section */}
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
            <div className="p-6 border-b-4 border-green-500">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-4 bg-green-100 rounded-lg group-hover:bg-green-500 transition-colors duration-300">
                  <Building2 className="w-8 h-8 text-green-500 group-hover:text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">About MedSync</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our focus on patient care, research, education and prevention helps create
                a healthier today and happier tomorrow.
              </p>
              <button 
                onClick={() => navigate("/About")}
                className="mt-4 text-green-500 hover:text-green-600 font-semibold flex items-center group"
              >
                Learn More 
                <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

  {/* Awards Section */}
   <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
            <div className="p-6 border-b-4 border-purple-500">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-4 bg-purple-100 rounded-lg group-hover:bg-purple-500 transition-colors duration-300">
                  <Award className="w-8 h-8 text-purple-500 group-hover:text-white" />
                </div>

        
                <h2 className="text-xl font-bold text-gray-800">Awards & Recognition</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The clinical excellence at MedSync has been awarded several prestigious
                designations in healthcare excellence.
              </p>
              <button 
                className="mt-4 text-purple-500 hover:text-purple-600 font-semibold flex items-center group"
              >
                View Awards 
                <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
   
  );
};

export default Home;
