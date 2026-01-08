import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import api from "../api/axios"; // ✅ NEW
import bgImage from "/image25.jpg";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/user/login", data); // ✅ FIXED
      localStorage.setItem("Users", JSON.stringify(res.data.user));
      toast.success("Login successful");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-pink-600">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-blue-50 rounded-md"
            {...register("email", { required: true })}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-blue-50 rounded-md"
            {...register("password", { required: true })}
          />

          <button className="w-full bg-pink-500 text-white py-3 rounded-lg">
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Not registered?{" "}
          <Link to="/signup" className="text-blue-600 font-medium">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
