import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import bgImage from "/image25.jpg";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4001/user/login", data);
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
      <div className="bg-white rounded-xl p-8 w-full max-w-md mx-auto shadow-xl">

        <h2 className="text-2xl font-bold text-center mb-6 text-pink-600">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-blue-50 rounded-md outline-none focus:ring-2 focus:ring-pink-400"
            {...register("email", { required: true })}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-blue-50 rounded-md outline-none focus:ring-2 focus:ring-pink-400"
            {...register("password", { required: true })}
          />

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          <span className="text-gray-600">Not registered?</span>{" "}
          <Link to="/signup" className="text-blue-600 font-medium hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
