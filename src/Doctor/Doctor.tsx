import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleLogin = () => {
    if (!selectedId || !password) {
      setErrorMessage("Please select an ID and enter the password.");
    } else {
      setErrorMessage("");
      console.log("Logged in with ID:", selectedId);
      console.log("Password:", password);
      // Proceed with login logic
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('/images/doctor.jpeg')` }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login Page
        </h2>
        <div className="mb-4">
          <label
            htmlFor="userId"
            className="block text-gray-600 font-medium mb-2"
          >
            Select ID:
          </label>
          <select
            id="userId"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Select ID --</option>
            <option value="1">12345</option>
            <option value="2">56789</option>
            <option value="3">45678</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 font-medium mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>
        {errorMessage && (
          <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
        )}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

