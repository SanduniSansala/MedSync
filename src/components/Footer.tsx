import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-primary-color text-white">
        <div className="flex justify-center px-8 ">
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-bold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/DoctorChannel" className="hover:underline hover:text-blue-900">
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
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-bold mb-4">MedSync</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/About" className="hover:underline hover:text-blue-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/ContactUs" className="hover:underline hover:text-blue-900">
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
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-bold mb-4">FOLLOW US</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:underline hover:text-blue-900">
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline hover:text-blue-900">
                  YouTube
                </Link>
              </li>
            </ul>
            <p className="text-xl">
              <a href="tel:+94117990990" className="hover:underline text-red-500 hover:text-blue-900">
                +94 999 999 999
              </a>{" "}
              for Agent Assistance
            </p>
          </div>
        </div>
        <div className="border-t border-white mt-6 pt-6 text-center text-sm ">
          <p>© DIGITAL HEALTH PVT LTD. ALL RIGHTS RESERVED.</p>
          <p>
            Technology Partner: <span className="font-bold">MedSync</span>
            <br />
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
