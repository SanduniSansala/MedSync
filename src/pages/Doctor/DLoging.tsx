import React from 'react'
import Dheader from '../../components/Dheader'
import Footer from '../../components/Footer'
import { useState } from 'react' 

const Loging:React.FC = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    if(id && password){

    }
  }
  return (
    <>
        <Dheader/>
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
        <Footer/>
      
    </div>
    </>
  )
}

export default Loging;
