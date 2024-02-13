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

const updateBookAuthor = async (req, res) => {
  try {
    const { title } = req.params;
    const { author } = req.body;
    const updatedBook = await Book.findOneAndUpdate(
      { title: title },
      { author: author },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res
      .status(200)
      .json({ message: "Book author updated successfully", updatedBook });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

module.exports = {
  addBook: addBook,
  getAllBooks: getAllBooks,
  updateBookAuthor: updateBookAuthor,
};
