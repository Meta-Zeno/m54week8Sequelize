const Author = require("./models");
const Book = require("../books/model");

const addAuthor = async (req, res) => {
  try {
    const author = await Author.create({
      authorName: req.body.authorName,
    });

    res.status(201).json({
      message: `${author.authorName} Author was added successfully`,
      author: author,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll({ include: "Books" });

    res.status(200).json({ message: "success all the authors", authors });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getBooksByAuthor = async (req, res) => {
  try {
    const authorName = req.params.authorName;

    // Find the author with the specified name
    const books = await Author.findOne({
      where: { authorName: authorName },
      include: "Books",
    });

    if (!books) {
      return res.status(404).json({ message: "Author not found" });
    }

    res.status(200).json({ message: "All Books found by Author", books });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addAuthor,
  getAllAuthors,
  getBooksByAuthor,
};
