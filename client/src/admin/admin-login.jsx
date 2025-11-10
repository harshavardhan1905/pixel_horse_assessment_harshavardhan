import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("harsha@gmail.com");
  const [password, setPassword] = useState("123");
  const [userLogin, setuserLogin] = useState("")
  const navigate = useNavigate()



    
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Logged in:", { email, password });
    if(email=="harsha@gmail.com"){
        if(password=="123"){
            setuserLogin("yes")
             navigate("/admin");

        }
        else{
            alert("Invalid password")
            setuserLogin("no")
        }
    }
    else{
        alert("User not exist")
        setuserLogin("no")
    }
  };

  return (
    <div className="d-flex justify-content-center bg-light" style={{ minHeight: "100vh" }}>
      <form
        onSubmit={handleSubmit}
        className="p-4 shadow rounded bg-white mt-5"
        style={{ width: "350px" }}
      >
        <h2 className="text-center mb-4">Sign In</h2>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="harsha@gmail.com"
            value={email}
            // defaultValue={"harsha@gmail.com"}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary w-100">Sign In</button>

        <p className="text-center mt-3">
          Don’t have an account? <a href="/register">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
