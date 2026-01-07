import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";

function App() {
  const [authUser] = useAuth();

  // 🌙 Global Theme State
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // 🌗 Apply theme to whole app
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white min-h-screen">
      <Routes>
        {/* 🔐 Auth pages */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* 🌍 Main site */}
        <Route element={<MainLayout theme={theme} setTheme={setTheme} />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/login" />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
