import React from 'react'
import Dheader from '../../components/Dheader'
import Footer from '../../components/Footer'
import {LogIn , UserPlus} from 'lucide-react';
import { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Doctor:React.FC = () => {
  const navigate= useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    

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
        <Dheader/>
        <div>
        <div className="min-h-screen bg-gray-100">
         {/* Hero Section with Carousel */}
      <div className="relative h-[600px] w-full overflow-hidden">
      <div 
          className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          
          
          </div> 
        </div> 
        </div>
        


   </div>
        <Footer/>
      
    </div>
  )
}

export default Doctor;
