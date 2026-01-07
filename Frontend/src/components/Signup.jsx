import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import bgImage from "/image25.jpg";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4001/user/signup", data);
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
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-2 border rounded"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm">Full name required</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded"
              {...register("email", { required: true })}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded"
              {...register("password", { required: true })}
            />
          </div>

          <button className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600">
            Signup
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
  <span className="text-gray-600">Already registered?</span>{" "}
  <Link
    to="/login"
    className="text-blue-600 font-medium hover:underline"
  >
    Login
  </Link>
</p>

      </div>
    </div>
  );
}

export default Signup;
