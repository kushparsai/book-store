import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import engMath from "../assets/image5.jpg";
import compFund from "../assets/image6.jpg";
import humanAnatomy from "../assets/image7.jpg";
import physiology from "../assets/image8.jpg";
import nursingFoundation from "../assets/image9.webp";
import communityHealth from "../assets/image10.png";
import englishLiterature from "../assets/image11.jpg";
import sociology from "../assets/image12.jpg";
import mechengineering from "../assets/image13.jpeg";
import civil from "../assets/image14.webp";
import electronic from "../assets/image15.webp";
import graphics from "../assets/image12.jpg";
import bio from "../assets/image17.jpg";
import phatho from "../assets/image18.jpg";
import pharma from "../assets/image19.webp";
import cfmt from "../assets/image20.jpg";
import cnp from "../assets/image21.jpg";
import funda from "../assets/image22.jpg";
import surgical from "../assets/image23.webp";
import competitive from "../assets/image24.webp";

function Course() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBooks(res.data);
      } catch (error) {
        console.log("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };
    getBooks();

    // Load existing cart count
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(storedCart.length);
  }, []);

  const addToCart = (book) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const isAlreadyAdded = storedCart.find((item) => item.title === book.title);

    if (isAlreadyAdded) {
      toast.error("Already in cart!");
    } else {
      const updatedCart = [...storedCart, book];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartCount(updatedCart.length);
      toast.success("Added to cart!");
    }
  };

  const courseCategories = [
    {
      name: "Engineering",
      books: [
        { id: 1, title: "Engineering Mathematics", image: engMath, price: 499 },
        { id: 2, title: "Computer Science Fundamentals", image: compFund, price: 599 },
        { id: 3, title: "Mechanical Engineering", image: mechengineering, price: 449 },
        { id: 4, title: "Civil Engineering", image: civil, price: 699 },
        { id: 5, title: "Electronic Engineering", image: electronic, price: 459 },
        { id: 6, title: "Engineering Graphics", image: graphics, price: 549 },
      ],
    },
    {
      name: "MBBS",
      books: [
        { id: 1, title: "Human Anatomy", image: humanAnatomy, price: 699 },
        { id: 2, title: "Physiology for Medical Students", image: physiology, price: 899 },
        { id: 3, title: "Biochemistry", image: bio, price: 799 },
        { id: 4, title: "Phathology", image: phatho, price: 599 },
        { id: 5, title: "Pharmacology", image: pharma, price: 699 },
        { id: 6, title: "CFMT", image: cfmt, price: 999 },
      ],
    },
    {
      name: "Nursing",
      books: [
        { id: 1, title: "Nursing Foundation", image: nursingFoundation, price: 499 },
        { id: 2, title: "Community Health Nursing", image: communityHealth, price: 450 },
        { id: 3, title: "Clinical Nursing Procedure", image: cnp, price: 450 },
        { id: 4, title: "Fundamental of Nursing", image: funda, price: 450 },
        { id: 5, title: "Medical Surgical Nursing", image: surgical, price: 450 },
        { id: 6, title: "Competitive Handbook of Nursing", image: competitive, price: 450 },
      ],
    },
    {
      name: "Arts & Humanities",
      books: [
        { id: 10, title: "English Literature", image: englishLiterature, price: 350 },
        { id: 11, title: "Sociology for Beginners", image: sociology, price: 499 },
      ],
    },
  ];

  const scrollRefs = useRef({});

  const scroll = (categoryName, direction) => {
    const container = scrollRefs.current[categoryName];
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl font-semibold text-black dark:text-white">
          Explore Our Popular{" "}
          <span className="text-pink-500">Courses & Books</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Find books for your favorite course — Engineering, MBBS, Nursing, Arts, and more.
        </p>

        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Search your book..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="mt-6 flex justify-center items-center space-x-4">
          <Link to="/cart">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              🛒 Cart ({cartCount})
            </button>
          </Link>
        </div>
      </div>

      {!loading &&
        courseCategories.map((course) => (
          <div key={course.name} className="mt-16 relative">
            <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">
              {course.name} Books
            </h2>

            <div
              ref={(el) => (scrollRefs.current[course.name] = el)}
              className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth px-6"
            >
              {course.books.map((book) => (
                <div
                  key={book.id}
                  className="min-w-[250px] border rounded-lg shadow-md hover:shadow-xl transition-all p-4 bg-white"
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-56 object-cover rounded-md"
                  />
                  <h3 className="text-lg font-semibold mt-3">{book.title}</h3>
                  <p className="mt-2 font-bold text-pink-600">₹{book.price}</p>
                  <button
                    onClick={() => addToCart(book)}
                    className="mt-3 w-full bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-pink-600 transition"
                  >
                    Add to cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Course;
