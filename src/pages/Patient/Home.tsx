import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const Home: React.FC = () => {
  const navigate= useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    '/src/assets/Images/8.jpg',
    '/src/assets/Images/9.jpg',
    '/src/assets/Images/10.jpg',

  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
  
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
<img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h2 className="text-4xl font-bold mb-4">Welcome to MedSync</h2>
                    <p className="text-xl mb-6">Discover amazing content and features</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
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
                currentIndex === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Meet Our Doctors</h3>
            <p className="text-gray-600">The medical team at MedSync provides the highest quality healthcare for patients.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">About MedSync</h3>
            <p className="text-gray-600">Our focus on patient care, research, education and prevention helps make healthier today and happier tomorrow.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Awards & Recognition</h3>
            <p className="text-gray-600">The clinical excellence at MedSync has been awarded several prestigious designations in Patiens's health, including Magnet Recognition and Level 1 Surgical Center.</p>
          </div>
        </div>
      </div>
    </div>
      
      <Footer />
    </div>
  );
};

export default Home;
