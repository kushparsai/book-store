import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthProvider";
import { useCart } from "../context/CartContext";
import Logout from "./Logout";
import logo from "../assets/image26.png";

function Navbar() {
  const [authUser] = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  // 🌙 Theme handling
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 📌 Sticky navbar
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔍 Search redirect
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim()) {
      navigate(`/?search=${value}`);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          sticky
            ? "bg-white dark:bg-slate-800 shadow-md"
            : "bg-white dark:bg-slate-800"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 md:px-16 flex items-center justify-between h-20">

          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="StudyStack"
              className="w-12 h-12 rounded-full object-contain"
            />
            <span className="font-bold text-xl text-black dark:text-white">
              StudyStack
            </span>
          </Link>

          {/* 🧭 Desktop Menu */}
          <nav className="hidden md:flex gap-8 font-medium text-black dark:text-white">
            <Link to="/">Home</Link>
            <Link to="/course">Course</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* 🔍 Search (Desktop only) */}
          <div className="hidden md:flex items-center border px-3 py-1 rounded-md dark:border-gray-600">
            <input
              type="text"
              placeholder="Search books..."
              value={searchTerm}
              onChange={handleSearch}
              className="outline-none bg-transparent text-sm dark:text-white"
            />
          </div>

          {/* 🛒 Cart + Auth + Menu */}
          <div className="flex items-center gap-4">

            {/* 🛒 Cart */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-black dark:text-white" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-1 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className=" text-lg"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {authUser ? (
              <Logout />
            ) : (
              <Link
                to="/login"
                className="hidden md:block bg-black text-white px-4 py-1 rounded-md text-sm"
              >
                Login
              </Link>
            )}

            <button
              className="md:hidden text-black dark:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-800 px-6 py-6 space-y-4 text-lg font-medium">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              Home
            </Link>
            <Link
              to="/course"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              Course
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              Contact
            </Link>

            {!authUser && (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block text-pink-500"
              >
                Login to explore 📚
              </Link>
            )}
          </div>
        )}
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;
