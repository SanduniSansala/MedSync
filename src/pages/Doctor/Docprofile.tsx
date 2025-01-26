import React from 'react'
import Dheader from '../../components/Dheader'
import Footer from '../../components/Footer'
import {LogIn , UserPlus} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Docprofile:React.FC = () => {
  const navigate= useNavigate();
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Dheader/>
      
      <div>
        
           <main className="flex-grow flex items-center justify-center p-6 ">
           <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center "
      style={{ backgroundImage: `url('/images/8.jpg')` }}
    >
           </div>
            </main>  
      </div>
      
    </div>
  )
}
