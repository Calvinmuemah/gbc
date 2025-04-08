import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Use Vite environment variable for the API endpoint
      const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/api/login`, form);
      localStorage.setItem("token", res.data.token);

      // Display success toast and redirect
      toast.success("Login successful! Welcome to Glory Bible Church.", { autoClose: 2000 });
      setTimeout(() => navigate("/Home"), 2000); // Delay navigation to show toast
    } catch (error) {
      // Handle errors gracefully
      toast.error("Login failed. Please check your credentials.");
      console.error("Login error:", error);
    }

    setLoading(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
      <div className="card p-4 shadow-lg" style={{ width: "350px", borderRadius: "10px" }}>
        <h2 className="text-center mb-4 text-success">Login to Glory Bible Church</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              onChange={handleChange} 
              className="form-control" 
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="Enter your password" 
              onChange={handleChange} 
              className="form-control" 
              required
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button type="submit" className="btn btn-success w-100" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
          <div className="text-center mt-3">
            <Link to="/ForgotPassword" className="text-danger">Forgot Password?</Link>
          </div>
          <p className="text-center mt-2">
            Don't Have An Account? <Link to="/register" className="text-success">Register Here</Link>
          </p>
        </form>
      </div>

      {/* Toastify Notification Container */}
      <ToastContainer />
    </div>
  );
}

export default Login;
