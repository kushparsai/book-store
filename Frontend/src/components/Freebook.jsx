import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";

import Cards from "./Cards";
import scienceBook from "../assets/image1.jpg";
import mathsBook from "../assets/image2.jpg";
import englishBook from "../assets/image3.jpg";
import csBook from "../assets/image4.jpg";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/bookstore");
        const data = res.data.filter((data) => data.category === "Free");
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const books = [
    { img: scienceBook, name: "Science" },
    { img: mathsBook, name: "Maths" },
    { img: englishBook, name: "English" },
    { img: csBook, name: "Computer Science" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">

      {/* 🔹 TOP 4 BOOKS */}
      <div className="text-center py-10">
        <h1 className="font-semibold text-2xl pb-4 text-gray-800">
          Courses
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Explore our collection of educational resources designed to help
          you learn and grow.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="w-56 bg-white p-4 rounded-lg shadow-lg text-center"
            >
              <img
                src={book.img}
                alt={book.name}
                className="w-full h-64 object-cover rounded-md mb-3"
              />
              <p className="font-semibold text-gray-800">{book.name}</p>
            </div>
          ))}
        </div>

        {/* ✅ THIS IS THE BLANK WHITE SECTION */}
        <div className="mt-12">
          <p className="text-gray-700 text-lg mb-4">
            For more books check courses
          </p>

          <Link to="/course">
            <button className="bg-pink-500 text-white px-8 py-2 rounded-md hover:bg-pink-700 transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* 🔹 FREE BOOKS SLIDER */}
      <div className="pb-12">
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
