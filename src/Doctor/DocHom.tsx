import React from 'react';
import { Stethoscope, LogIn, UserPlus } from 'lucide-react';

const DoctorPortalHomepage = () => {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        {/* Header */}
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Stethoscope size={32} />
              <h1 className="text-2xl font-bold">Doctor Portal</h1>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
        </header>
        </div>
        )
    }