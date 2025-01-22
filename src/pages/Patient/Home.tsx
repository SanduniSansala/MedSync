import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import homeimage from "../../assets/Images/Home.png";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';


const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    '/api/placeholder/1200/600',
    '/api/placeholder/1200/600',
    '/api/placeholder/1200/600',
    '/api/placeholder/1200/600'
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

      <div className="w-full flex justify-end h-auto items-end">
        <div>
          <img src={homeimage} alt="doctor-image" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
