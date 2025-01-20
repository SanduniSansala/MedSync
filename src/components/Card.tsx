import React from 'react'
// import image from '../assets/Images/Cardiology.png'

interface props {
  title:string;
  description:string;
  image:string;
}
const Card:React.FC<props> = ({title,description,image}: props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  )
}

export default Card
