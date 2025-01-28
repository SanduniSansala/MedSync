import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Home: React.FC = () => {
  const navigate= useNavigate();
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header />
    
      
      <Footer />
    </div>
  );
};

export default Home;
