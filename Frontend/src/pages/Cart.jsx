import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, addToCart, removeFromCart, decreaseQuantity } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen px-8 py-24 bg-slate-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-300">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* LEFT */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((book) => (
              <div
                key={book._id}
                className="bg-white text-black p-4 rounded-xl flex gap-4"
              >
                <img
                  src={book.image}
                  className="w-24 h-32 object-cover rounded"
                />

                <div className="flex-1">
                  <h2 className="font-semibold">{book.title}</h2>
                  <p className="text-pink-600 font-bold">₹{book.price}</p>

                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => decreaseQuantity(book._id)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      −
                    </button>

                    <span>{book.quantity}</span>

                    <button
                      onClick={() => addToCart(book)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(book._id)}
                    className="text-red-500 mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="bg-white text-black p-6 rounded-xl h-fit">
            <h2 className="text-xl font-bold mb-4">Price Details</h2>

            <div className="flex justify-between">
              <span>Total</span>
              <span className="text-pink-600 font-bold">₹{total}</span>
            </div>

            <button className="mt-6 w-full bg-pink-500 text-white py-2 rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
