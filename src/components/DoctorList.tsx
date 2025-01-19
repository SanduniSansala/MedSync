import React from 'react'
import { useNavigate } from 'react-router-dom';

interface DocterView {
    docterID : String;
    name: string;
    specialty: string;
    contactNo: String;
  }

const  DocterList:React.FC = () => {

    const navigate= useNavigate();
    const doctors: DocterView[] = [
        { docterID: "MedSync001", name: "Prof. SISIRA RANARAJA", specialty: "Obstetrician & Gynaecologist" , contactNo : "077000000"},
        { docterID: "MedSync002", name: "Dr. JOHN DOE", specialty: "Cardiologist" , contactNo : "077000000"},
        { docterID: "MedSync003", name: "Dr. JANE SMITH", specialty: "Dermatologist", contactNo : "077000000" },
        { docterID: "MedSync004", name: "Dr. ALEX BROWN", specialty: "Pediatrician", contactNo : "077000000" },
        { docterID: "MedSync005", name: "Dr. ALEX BROWN", specialty: "Pediatrician", contactNo : "077000000" },
      ];

  return (
<div>
        <div className="min-h-screen bg-gray-100 p-4">
      <div className="space-y-4">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-4 border border-gray-200"
          >
            <div className="flex items-start">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="material-icons text-gray-500"></span>
              </div>
              <div className="ml-4">
                <h4 className="text-md font-bold text-primary-color">{doctor.name}</h4>
                <p className="text-gray-700 text-sm">{doctor.docterID}</p>
                <p className="text-gray-700 text-sm">{doctor.contactNo}</p>
                <p className="text-gray-700 text-sm">{doctor.specialty}</p>

              </div>
            </div>
          </div>
        ))}
      </div>
      <br/>
      <button 
            className="flex flex-col items-center bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition w-40" onClick={() => navigate("/Form")}>
            <span>Add new Docter</span>
        </button>
    </div>
    </div>
  )
}

export default DocterList