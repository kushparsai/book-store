import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-slate-900 dark:text-white py-10 mt-16 border-t border-gray-200 dark:border-slate-700">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">About StudyStack</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            StudyStack is your one-stop destination for all your learning needs.
            Explore books, courses, and resources to boost your knowledge.
          </p>
          <Link
            to="/about"
            className="inline-block mt-3 text-pink-600 hover:text-pink-800 font-medium"
          >
            Learn more →
          </Link>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> support@StudyStack.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 98765 43210
            </li>
          </ul>
          <Link
            to="/contact"
            className="inline-block mt-3 text-pink-600 hover:text-pink-800 font-medium"
          >
            Contact Us →
          </Link>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/course">Courses</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/kush.parsai/" aria-label="Facebook" className="hover:text-pink-600"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/kush_parsai3939/" aria-label="Instagram" className="hover:text-pink-600"><Instagram size={20} /></a>
            <a href="https://x.com/ParsaiKush58303" aria-label="Twitter" className="hover:text-pink-600"><Twitter size={20} /></a>
            <a href="https://www.linkedin.com/in/kush-parsai-6696a624b/" aria-label="LinkedIn" className="hover:text-pink-600"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700 pt-5">
        © {new Date().getFullYear()} StudyStack. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
