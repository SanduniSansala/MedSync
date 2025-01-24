import React from 'react';
import { 
  Facebook, 
  Youtube, 
  Twitter, 
  MapPin ,
  PhoneCall,
  MailIcon
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: <Facebook size={40} className="text-blue-600" />,
      url: 'https://facebook.com',
      bgColor: 'hover:bg-blue-200'
    },
    {
      name: 'YouTube',
      icon: <Youtube size={40} className="text-red-600" />,
      url: 'https://youtube.com',
      bgColor: 'hover:bg-red-200'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={40} className="text-blue-600" />,
      url: 'https://twitter.com',
      bgColor: 'hover:bg-blue-200'
    }
  ];

  
  return (
 
<div
      className="min-h-screen flex items-center justify-center bg-cover bg-center "
      style={{ backgroundImage: `url('/images/doctor.jpeg')` }}
    >
   <div className="max-w-5xl mx-auto p-2">
     <div className="bg-white/70 shadow-x1 rounded-lg overflow-hidden ">

          
          {/* Contact Information Section */}
          <div className="px-2 py-2 sm:p-12 width-100">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">Contact Us</h1>
            
            {/* Contact Details */}
            <div className="mb-8">
              <p  className="text-lg text-gray-600 flex items-center">
              <MailIcon className="mr-2 text-green-500" size={24} />
                <strong>Email:</strong> contact@example.com
              </p>
              <p className="text-lg text-gray-600 flex items-center">
                <PhoneCall className="mr-2 text-green-500" size={24} />
                <strong>Phone:</strong> (555) 123-4567
              </p>
              <p className="text-lg text-gray-600 flex items-center">
                <MapPin className="mr-2 text-green-500" size={24} />
                <strong>Address:</strong> 123 Main Street, Anytown, USA 12345
              </p>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.982384354855!2d-73.98823548469138!3d40.748817179286595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1625785408638!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 50 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
