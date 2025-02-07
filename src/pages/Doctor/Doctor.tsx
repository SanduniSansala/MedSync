import React, { useState, useEffect } from "react";
import Dheader from "../../components/Dheader";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";


const Doctor: React.FC = () => {
  const navigate = useNavigate();
  const [, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    

    const images = [
      '../../assets/Images/8.jpg',
      '../../assets/Images/9.jpg',
      '../../assets/Images/10.jpg',
  
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
    
   
  return (
    <>
      <Dheader />
      <div>
        <div className="min-h-screen bg-gray-100">
          {/* Hero Section with Carousel */}
          <div className="relative h-[600px] w-full overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            ></div>
          </div>
        </div>

        <div>
          <div>
            <main className="flex-grow flex items-center justify-center p-6">
              <div
                className="min-h-screen flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url('/images/doctor.jpeg')` }}
              >
                <div className="bg-white/60 rounded-xl shadow-2xl p-8 w-full max-w-md text-center">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">
                    Doctor Portal
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Please choose an option below
                  </p>

                  <div className="flex justify-center space-x-6">
                    <button
                      className="flex flex-col items-center bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition w-40"
                      onClick={() => navigate("/DoctorLogin")}
                    >
                      <LogIn size={40} className="mb-2" />
                      <span>Login</span>
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Doctor;