import React, { useState } from 'react';

interface DoctorRegistrationForm {
  name: string;
  email: string;
  phoneNumber: string;
  specialty: string;
  password: string;
}

const DoctorRegistration: React.FC = () => {
  const [formData, setFormData] = useState<DoctorRegistrationForm>({
    name: '',
    email: '',
    phoneNumber: '',
    specialty: '',
    password: ''
  });

  const [errors, setErrors] = useState<Partial<DoctorRegistrationForm>>({});
  const [registrationError, setRegistrationError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<DoctorRegistrationForm> = {};

    // Name validation
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    // Phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phoneNumber || !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits';
    }

    // Specialty validation
    if (!formData.specialty) {
      newErrors.specialty = 'Specialty is required';
    }

    // Password validation
    if (!formData.password || formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        // Simulate registration process
        console.log('Registration Data:', formData);
        setRegistrationError(null);
        // Add actual registration logic here
      } catch (error) {
        setRegistrationError('Registration failed');
      }
    }
  };

  const specialtyOptions = [
    'Cardiology', 'Neurology', 'Pediatrics', 
    'Orthopedics', 'Oncology', 'Dermatology'
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Doctor Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              type="text" 
              name="name"
              placeholder="Full Name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <input 
              type="tel" 
              name="phoneNumber"
              placeholder="Phone Number" 
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-blue-500"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
          </div>

          <div>
            <select 
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-blue-500"
            >
              <option value="">Select Specialty</option>
              {specialtyOptions.map(specialty => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
            {errors.specialty && <p className="text-red-500 text-sm">{errors.specialty}</p>}
          </div>

          <div>
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-blue-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {registrationError && (
            <div className="text-red-500 text-sm text-center">
              {registrationError}
            </div>
          )}

          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorRegistration;
