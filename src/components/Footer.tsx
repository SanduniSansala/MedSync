import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-primary-color text-white">
        <div className="flex justify-center p-8 ">
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-bold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline  hover:text-blue-900">
              Channel Your Doctor
                </a></li>
              <li><a href="#" className="hover:underline  hover:text-blue-900">
              Ongoing Number
                </a></li>
              {/* <li><a href="#" className="hover:underline  hover:text-blue-900">
              Audio/Video Consultation
                </a></li>
              <li><a href="#" className="hover:underline  hover:text-blue-900">
              Medicine to Your Doorstep
                </a></li>
              <li><a href="#" className="hover:underline  hover:text-blue-900">
              Healthcare to Your Doorstep
                </a></li>
              <li><a href="#" className="hover:underline  hover:text-blue-900">
              Lab Reports at Your Fingertips
                </a></li>
              <li><a href="#" className="hover:underline  hover:text-blue-900">
              Health Mart
                </a></li>
              <li><a href="#" className="hover:underline  hover:text-blue-900">
              Vet Care by SLVA
                </a></li> */}
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-bold mb-4">MedSync</h3>
            <ul className="space-y-2">
              {/* <li><a href="#" className="hover:underline  hover:text-blue-900">
              Partners
                </a></li> */}
              <li><a href="#" className="hover:underline  hover:text-blue-900">
              About Us
                </a></li>
              {/* <li><a href="#" className="hover:underline hover:text-blue-900">
              Terms & Conditions
                </a></li>
              <li><a href="#" className="hover:underline hover:text-blue-900">
              Privacy Notice
                </a></li> */}
              <li><a href="#" className="hover:underline hover:text-blue-900">
              Contact Us
                </a></li>
              <li><a href="#" className="hover:underline hover:text-blue-900">
              FAQ
                </a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-bold mb-4">FOLLOW US</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline  hover:text-blue-900">
                  Facebook
                </a>
              </li>
             
              <li>
                <a href="#" className="hover:underline hover:text-blue-900">
                  TouTube
                </a>
              </li>
            </ul>
            <p className="text-xl">
              <a href="tel:+94117990990" className="hover:underline text-red-500  hover:text-blue-900 ">
                 +94 999 999 999
              </a>{" "}
              for Agent Assistance
            </p>
          </div>
        </div>
        <div className="border-t border-white mt-6 pt-6 text-center text-sm ">
          <p>© DIGITAL HEALTH PVT LTD. ALL RIGHTS RESERVED.</p>
          <p>
            Technology Partner: <span className="font-bold">MedSync</span><br/><br/>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
