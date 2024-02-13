const { Router } = require("express");
const bookRouter = Router();

const {
  addBook,
  getAllBooks,
  updateBookAuthor,
  //   deleteBookByTitle,
} = require("./controllers");

bookRouter.post("/books/addBook", addBook);
bookRouter.get("/books", getAllBooks);
bookRouter.put("/books/:title/author", updateBookAuthor);
// bookRouter.delete("/books/:title", deleteBookByTitle);

module.exports = bookRouter;
