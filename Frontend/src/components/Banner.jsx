import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "/Banner.png";

function Banner() {
  const navigate = useNavigate();

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <marquee>
              <h1 className="text-2xl md:text-4xl font-bold">
                Hello, welcome here to learn something{" "}
                <span className="text-pink-500">new everyday!!!</span>
              </h1>
            </marquee>

            <p className="text-sm md:text-xl">
           Welcome to BOOKVILLAGE, your online destination for knowledge, inspiration, and adventure.
Explore thousands of books across engineering, technology, business, fiction, and more — all in one place.
            </p>
            <h4>“Every great journey begins with a single page.{" "}
<span className="text-blue-500">Start yours today — sign up and dive into a world of endless learning!”</span></h4>
          </div>
          <button
            className="btn mt-6 btn-secondary"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </button>
        </div>

        <div className="order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
