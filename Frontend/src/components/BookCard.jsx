import React from "react";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

function BookCard({ book }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md hover:shadow-lg transition">
      
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-60 object-cover rounded-md"
      />

      {/* ✅ BOOK TITLE – DARK/LIGHT FIX */}
      <h3 className="text-lg font-semibold mt-3 text-gray-900 dark:text-white">
        {book.title}
      </h3>

      {/* optional author */}
      {book.author && (
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {book.author}
        </p>
      )}

      {/* PRICE */}
      <p className="text-pink-500 font-bold mt-2">
        ₹{book.price}
      </p>

      <button
        onClick={() => {
          addToCart(book);
          toast.success("Book added to cart");
        }}
        className="mt-3 w-full bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
      >
        Add to cart
      </button>
    </div>
  );
}

export default BookCard;
