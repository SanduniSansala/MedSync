import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

import { useState } from 'react';

const AHome:React.FC  = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
    <Header/>
    <div>

    <div className="w-full flex justify-center">
        <div className="w-80 shadow-lg rounded-lg p-5 flex flex-col gap-5 my-10">
          <div className="grid grid-cols-2">
            <div>Id:</div>
            <div>
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="p-2 border w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>Password:</div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 border w-full"
              />
            </div>
          </div>
          <div>
            <button onClick={() => handleSubmit()} className="bg-emerald-600 text-white p-3 rounded-lg">
              Submit
            </button>
          </div>
        </div>
        </div>
      </div>
      <Footer/>
      </>

    
  )
}

export default AHome 
