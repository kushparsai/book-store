import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div
      className="
        max-w-screen-xl mx-auto px-6 md:px-16 lg:px-24 py-12
        bg-white text-gray-800
        dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800
        dark:text-slate-200
      "
    >
      {/* 🔹 Header Section */}
      <div className="text-center mb-10">
        <h1
          className="
            text-4xl font-bold mb-4
            text-gray-800
            dark:text-pink-400 dark:drop-shadow-lg
          "
        >
          About
        </h1>

        <p
          className="
            text-lg max-w-2xl mx-auto
            text-gray-600
            dark:text-slate-300
          "
        >
          Welcome to{" "}
          <span className="font-semibold text-blue-600 dark:text-pink-400">
            BookVillage
          </span>{" "}
          — your one-stop digital book village for quality education,
          inspiration, and knowledge.
        </p>
      </div>

      {/* 🔹 Mission & Why Choose Us Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2
            className="
              text-2xl font-semibold mb-4
              text-gray-800
              dark:text-blue-400
            "
          >
            Our Mission
          </h2>

          <p
            className="
              leading-relaxed mb-6
              text-gray-700
              dark:text-slate-300
            "
          >
            At{" "}
            <span className="font-semibold text-blue-600 dark:text-pink-400">
              BookVillage
            </span>
            , we believe that books have the power to change lives. Our mission
            is to make learning accessible, engaging, and affordable for
            everyone. We provide free and premium educational resources to help
            students, teachers, and lifelong learners expand their knowledge
            anytime, anywhere.
          </p>

          <h2
            className="
              text-2xl font-semibold mb-4
              text-gray-800
              dark:text-blue-400
            "
          >
            Why Choose Us?
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-slate-300">
            <li>📚 Wide collection of academic and skill-development books.</li>
            <li>💡 Free access to select study materials and e-books.</li>
            <li>⚡ Fast and user-friendly website experience.</li>
            <li>🔒 Safe, secure, and personalized user accounts.</li>
            <li>🌐 Constantly updated with the latest content.</li>
          </ul>
        </div>

        {/* 🔹 Image Section */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            alt="About BookVillage"
            className="
              rounded-2xl shadow-lg w-full md:w-4/5
              hover:scale-105 transition-transform duration-300
              dark:shadow-pink-500/20
            "
          />
        </div>
      </div>

      {/* 🔹 Quote Section */}
      <div className="text-center mt-12">
        <h2
          className="
            text-2xl font-semibold mb-2
            text-gray-800
            dark:text-pink-400
          "
        >
          “Read. Learn. Grow.”
        </h2>

        <p
          className="
            max-w-2xl mx-auto
            text-gray-600
            dark:text-slate-300
          "
        >
          Join our growing community of learners today and discover how reading
          can empower your future. Whether you're a student, teacher, or curious
          explorer — BookVillage has something for everyone.
        </p>
      </div>

      {/* 🔹 Back to Home Button */}
      <div className="text-center mt-10">
        <Link to="/">
          <button
            className="
              bg-blue-600 text-white px-6 py-2 rounded-md
              hover:bg-blue-800 transition duration-300 shadow-md
              dark:bg-pink-500 dark:hover:bg-pink-600
            "
          >
            ⬅ Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
