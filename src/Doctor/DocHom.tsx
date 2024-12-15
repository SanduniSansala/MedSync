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

        {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Doctor Portal</h2>
          <p className="text-gray-600 mb-8">Please choose an option below</p>
          
          <div className="flex justify-center space-x-6">
            <button 
              className="flex flex-col items-center bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition w-40"
            >
              <UserPlus size={40} className="mb-2" />
              <span>Register</span>
            </button>
            
            <button 
              className="flex flex-col items-center bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition w-40"
            >
              <LogIn size={40} className="mb-2" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </main>

        </div>
        )
    }