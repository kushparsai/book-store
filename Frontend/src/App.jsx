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
import Cart from "./context/Cart";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div style={{ color: "red", fontSize: "40px" }}>
      APP IS WORKING
    </div>
  );
}

