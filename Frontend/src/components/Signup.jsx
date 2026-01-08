import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import api from "../api/axios"; // ✅ NEW
import bgImage from "/image25.jpg";

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await api.post("/user/signup", data); // ✅ FIXED
      toast.success("Signup successful");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-3 py-2 border rounded"
            {...register("fullname", { required: true })}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded"
            {...register("email", { required: true })}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border rounded"
            {...register("password", { required: true })}
          />

          <button className="w-full bg-pink-500 text-white py-2 rounded">
            Signup
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already registered?{" "}
          <Link to="/login" className="text-blue-600 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
