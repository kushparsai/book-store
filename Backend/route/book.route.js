import express from "express";
import Book from "../model/book.model.js";

const router = express.Router();

router.post("/seed", async (req, res) => {
  try {
    const existing = await Book.find();
    if (existing.length > 0) {
      return res.status(400).json({ message: "Books already exist" });
    }

    const books = [
      {
        title: "Cambridge IGCSE Complete Mathematics",
        author: "David Rayner, Ian Bettison, Mathew Taylor",
        price: 899,
        category: "Mathematics",
        image: "/uploads/image2.jpg",
      },
      {
        title: "Essentials of English",
        author: "Vincent F. Hopper, Cedric Gale, Ronald C. Foote, Benjamin W. Griffith",
        price: 749,
        category: "English",
        image: "/uploads/image3.jpg",
      },
      {
        title: "Computer Science Course Companion (2025 Edition)",
        author: "Bill MacKenty, Lindsey Stephenson",
        price: 999,
        category: "Computer Science",
        image: "/uploads/image4.jpg",
      },
    ];

    await Book.insertMany(books);
    res.status(201).json({ message: "Books added successfully", books });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
