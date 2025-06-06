import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5001/api/users/login", data,
        {
          withCredentials: true,
          headers:{
            "Content-Type": "application/json"
          }
        }
      );
      
      toast.success(res.data.message);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      if(res.data.role==="admin") navigate("/admin-dashboard");
      else navigate("/user-dashboard");

    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };


  return (
    <>
    <button onClick={()=> navigate('/')}>Back</button>
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />

      <button type="submit">Log In</button>
    </form>
    </>
    
  );
};

export default Login;
