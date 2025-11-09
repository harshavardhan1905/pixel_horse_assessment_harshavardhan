import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered:", { name, email, password });
    axios.post("http://localhost:8000/api/user/register",{
        name: name,
        email: email,
        password: password
    }).then((res) => {
      alert("✅ Registered Successfully!");
      
      // Reset form values
      setName("");
      setEmail("");
      setPassword("");

      console.log("Server Response:", res.data);
  
    })
    .catch((err) => {
      console.error(err);
      alert("❌ Registration failed! Please try again.");
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-white" style={{ width: "350px" }}>
        <h2 className="text-center mb-4">Sign Up</h2>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-success w-100">Sign Up</button>

        <p className="text-center mt-3">
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
