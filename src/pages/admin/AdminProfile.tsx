import React from "react";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";
import bgimg from '../../assets/Images/1.png';

const AdminProfile: React.FC = () => {
  return <div>
    <AdminHeader />
    <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center p-4 bg-primary-green"
        style={{ backgroundImage: `url(${bgimg})`, backgroundBlendMode: 'overlay', backgroundColor: '' }}
      >
        
      </div>
    <Footer />

  </div>;
};

export default AdminProfile;
