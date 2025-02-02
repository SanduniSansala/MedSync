import React from 'react'
import Dheader from '../../components/Dheader'
import Footer from '../../components/Footer'
import {LogIn , UserPlus} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Doctor:React.FC = () => {
  const navigate= useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const images = [
      '/src/assets/Images/8.jpg',
      '/src/assets/Images/9.jpg',
      '/src/assets/Images/10.jpg',
  
    ];
   
  return (
    <div>
        <Dheader/>
        <div>
        
        


   </div>
        <Footer/>
      
    </div>
  )
}

export default Doctor;
