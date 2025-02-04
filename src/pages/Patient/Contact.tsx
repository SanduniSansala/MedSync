import React from "react";
import {
  Facebook,
  Youtube,
  Twitter,
  MapPin,
  PhoneCall,
  MailIcon,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ContactPage: React.FC = () => {
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
    <>
      <Header />
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center "
        style={{ backgroundImage: `url('/images/doctor.jpeg')` }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/70 shadow-xl rounded-lg overflow-hidden">
            {/* Contact Information Section */}
            <div className="px-6 py-8 sm:p-10 ">
              <h1 className="text-3xl font-bold text-blue-600 mb-6">
                Contact Us
              </h1>

              {/* Contact Details */}
              <div className="mb-8">
                <a
                  href="mailto:medsync@gmail.com"
                  className="text-lg text-gray-600 hover:text-green-600 transition-colors flex items-center"
                >
                  <MailIcon className="mr-2 text-green-500" size={24} />
                  <strong className="mr-1">Email:</strong>
                  <span className="hover:underline">medsync@gmail.com</span>
                </a>

                <a
                  href="tel:+94123456789"
                  className="text-lg text-gray-600 hover:text-green-600 transition-colors flex items-center"
                >
                  <PhoneCall className="mr-2 text-green-500" size={24} />
                  <strong className="mr-1">Phone:</strong>
                  <span className="hover:underline">(+94) 123-456-789</span>
                </a>
                <a
                  href="https://www.google.com/maps/place/XW27%2B8F6+Biyagama+Rd+Peliyagoda/@6.9600835,79.8836354,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae257c1c9c8a4eb:0x8e3a5a7e6b1f5b1a!8m2!3d6.9600835!4d79.8836354!16s%2Fg%2F11sx8z5p9q?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-600 hover:text-green-600 transition-colors flex items-center"
                >
                  <MapPin className="mr-2 text-green-500" size={24} />
                  <strong>Address: </strong> 123,MedSync,Kelaniya,Sri Lanka
                </a>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                    p-3 rounded-full transition duration-300 ease-in-out
                    ${social.bgColor} hover:shadow-lg
                  `}
                  >
                    {social.icon}
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>

              {/* Embedded Map */}
              <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.251757503637!2d79.8836354!3d6.9600835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae257c1c9c8a4eb%3A0x8e3a5a7e6b1f5b1a!2sXW27%2B8F6%20Biyagama%20Rd%2C%20Peliyagoda!5e0!3m2!1sen!2slk!4v1719400000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 20 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
