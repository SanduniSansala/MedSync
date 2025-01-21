import React from 'react'
import Dheader from '../../components/Dheader'
import Footer from '../../components/Footer'
import {LogIn , UserPlus} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Doctor:React.FC = () => {
  const navigate= useNavigate();
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <Dheader/>
      
        <Footer/>
      
    </div>
  )
}

export default Doctor;
