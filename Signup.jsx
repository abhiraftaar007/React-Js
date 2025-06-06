import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5001/api/users/signup",
        data
      );
      toast.success(res.data.message);
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <>
    <button onClick={()=> navigate('/')}>Back</button>
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input name="name" placeholder="Name" value={data?.name} onChange={handleChange} required />
      <input
        name="email"
        type="email"
        value={data?.email}
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        value={data?.password}
        placeholder="Password"
        onChange={handleChange}
        required
      />

      <button type="submit">Sign Up</button>
    </form>
    </>
  );
};

export default Signup;
