import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const PatientLogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      setError("Email and password are both required.");
      return;
    }
    setError("");
    // Add your login logic here
    navigate("/Profile");
  };

  return (
    <>
      <Header />

      <div className="w-full flex justify-center">
        <div className="w-[600px] p-5 rounded-lg shadow-lg my-10 ">
          <div className="grid grid-cols-2 gap-5">
            <div>Email</div>
            <div>
              <input
                className="border w-full"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>Password</div>
            <div>
              <input
                className="border w-full"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && (
              <div className="col-span-2 text-red-500">{error}</div>
            )}
            <div className="col-span-2">
              <button
                onClick={handleSubmit}
                className="bg-emerald-600 p-3 rounded-lg text-white"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PatientLogin;