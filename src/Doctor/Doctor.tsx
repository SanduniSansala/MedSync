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
    <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
      <h2>Login Page</h2>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="userId" style={{ display: "block", marginBottom: "0.5rem" }}>
          Select ID:
        </label>
        <select
          id="userId"
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          style={{ padding: "0.5rem", width: "100%" }}
        >
          <option value="">-- Select ID --</option>
          <option value="1">Admin</option>
          <option value="2">User</option>
          <option value="3">Guest</option>
        </select>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="password" style={{ display: "block", marginBottom: "0.5rem" }}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "0.5rem", width: "100%" }}
          placeholder="Enter your password"
        />
      </div>
      {errorMessage && (
        <div style={{ color: "red", marginBottom: "1rem" }}>{errorMessage}</div>
      )}
      <button
        onClick={handleLogin}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
