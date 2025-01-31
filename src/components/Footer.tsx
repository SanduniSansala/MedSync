import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Youtube,
  Twitter,
  MapPin,
  PhoneCall,
  MailIcon,
} from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook size={40} className="text-blue-600" />,
      url: "https://facebook.com",
      bgColor: "hover:bg-blue-200",
    },
    {
      name: "YouTube",
      icon: <Youtube size={40} className="text-red-600" />,
      url: "https://youtube.com",
      bgColor: "hover:bg-red-200",
    },
    {
      name: "Twitter",
      icon: <Twitter size={40} className="text-blue-600" />,
      url: "https://twitter.com",
      bgColor: "hover:bg-blue-200",
    },
  ];

  return (
    <div className="bg-blue-600/90 text-white py-8">
      {" "}
      {/* Reduced vertical padding */}
      <div className="flex justify-center px-8 gap-4">
        {" "}
        {/* Added gap-4 for column spacing */}
        {/* Services Column */}
        <div className="w-full md:w-1/3 mb-4">
          {" "}
          {/* Reduced margin-bottom */}
          <h3 className="text-lg font-bold mb-2">SERVICES</h3>{" "}
          {/* Reduced margin-bottom */}
          <ul className="space-y-1">
            {" "}
            {/* Tighter spacing */}
            <li>
              <Link
                to="/DoctorChannel"
                className="hover:underline hover:text-blue-900"
              >
                Channel Your Doctor
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline hover:text-blue-900">
                Ongoing Number
              </Link>
            </li>
          </ul>
        </div>
        {/* MedSync Column */}
        <div className="w-full md:w-1/3 mb-4">
          {" "}
          {/* Reduced margin-bottom */}
          <h3 className="text-lg font-bold mb-2">MedSync</h3>{" "}
          {/* Reduced margin-bottom */}
          <ul className="space-y-1">
            {" "}
            {/* Tighter spacing */}
            <li>
              <Link to="/About" className="hover:underline hover:text-blue-900">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/ContactUs"
                className="hover:underline hover:text-blue-900"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline hover:text-blue-900">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        {/* Follow Us Column */}
        <div className="w-full md:w-1/3 mb-4">
          <h3 className="text-lg font-bold mb-2 text-white">FOLLOW US</h3>
          <div className="mb-4">
            {" "}
            {/* Reduced margin-bottom */}
            <a
              href="mailto:medsync@gmail.com"
              className="text-lg text-white hover:text-green-600 transition-colors flex items-center"
            >
              <MailIcon className="mr-2 text-green-500" size={24} />

              <span className="hover:underline">medsync@gmail.com</span>
            </a>
            <a
              href="tel:+94123456789"
              className="text-lg text-white hover:text-green-600 transition-colors flex items-center"
            >
              <PhoneCall className="mr-2 text-green-500" size={24} />

              <span className="hover:underline">(+94) 123-456-789</span>
            </a>
            <a
              href="https://www.google.com/maps/place/XW27%2B8F6+Biyagama+Rd+Peliyagoda/@6.9600835,79.8836354,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae257c1c9c8a4eb:0x8e3a5a7e6b1f5b1a!8m2!3d6.9600835!4d79.8836354!16s%2Fg%2F11sx8z5p9q?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white hover:text-green-600 transition-colors flex items-center"
            >
              <MapPin className="mr-2 text-green-500" size={24} />
              123,MedSync,Kelaniya,Sri Lanka
            </a>
          </div>
          <div className="flex space-x-2 mb-4">
            {" "}
            {/* Reduced spacing and margin */}
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition duration-300 ease-in-out text-white ${social.bgColor} hover:shadow-lg bg-gray-300`}
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* HR Section */}
      <div className="border-t border-white mt-4 pt-4 text-center text-sm">
        {" "}
        {/* Reduced padding */}
        <p>© DIGITAL HEALTH PVT LTD. ALL RIGHTS RESERVED.</p>
        <p>
          Technology Partner: <span className="font-bold">MedSync</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
