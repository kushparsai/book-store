import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4001/api/messages",
        formData
      );

      if (res.data.success) {
        alert(`✅ Thanks ${formData.name}! Your message has been sent.`);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => navigate("/"), 1500);
      } else {
        alert("❌ Failed to send message.");
      }
    } catch (err) {
      alert("⚠️ Server error! Try again later.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-24 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center dark:text-white">
        📞 Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* LEFT INFO */}
        <div className="bg-base-200 p-6 rounded-2xl shadow-md dark:bg-slate-800 dark:text-white">
          <h2 className="text-2xl font-semibold mb-3">Get in Touch</h2>
          <p className="mb-3">
            Have a question about our bookstore or your order? We’d love to hear
            from you.
          </p>

          <div className="space-y-3">
            <p>📍 <strong>Address:</strong> Udaipur, Rajasthan</p>
            <p>📞 <strong>Phone:</strong> +91 98765 43210</p>
            <p>✉️ <strong>Email:</strong> support@bookvillage.com</p>
            <p>⏰ <strong>Hours:</strong> Mon–Sat, 9AM – 7PM</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-base-200 p-6 rounded-2xl shadow-md dark:bg-slate-800"
        >
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">
            Send a Message
          </h2>

          {/* NAME */}
          <div className="form-control mb-4">
            <label className="label dark:text-white">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="
                input input-bordered w-full
                bg-white text-black
                dark:bg-slate-700 dark:text-white
                dark:placeholder-gray-300
              "
            />
          </div>

          {/* EMAIL */}
          <div className="form-control mb-4">
            <label className="label dark:text-white">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="
                input input-bordered w-full
                bg-white text-black
                dark:bg-slate-700 dark:text-white
                dark:placeholder-gray-300
              "
            />
          </div>

          {/* MESSAGE */}
          <div className="form-control mb-4">
            <label className="label dark:text-white">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="
                textarea textarea-bordered w-full
                bg-white text-black
                dark:bg-slate-700 dark:text-white
                dark:placeholder-gray-300
              "
            />
          </div>

          <button
            type="submit"
            className="btn bg-pink-500 hover:bg-pink-600 text-white w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
