const Book = require("./model");

const addBook = async (req, res) => {
  try {
    const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
    });

    res
      .status(201)
      .json({ message: `${book.title} was added successfully`, book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();

    res.status(201).json({ message: "success all the books", books });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

// const getAllBooks = async (request, response) => {
//   try {
//     const books = await Book.find({});
//     response.json({ message: "success all the books", books: books });
//   } catch (error) {
//     response.status(500).json({ message: error.message });
//   }
// };

module.exports = {
  addBook: addBook,
  getAllBooks: getAllBooks,
};
