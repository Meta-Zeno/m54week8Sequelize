const { Router } = require("express");
const bookRouter = Router();

const {
  addBook,
  getAllBooks,
  updateAuthor,
  deleteBook,
} = require("./controllers");

bookRouter.post("/books/addBook", addBook);

module.exports = bookRouter;

bookRouter.post("/books/addBook", addBook);
bookRouter.get("/books/getAllBooks", getAllBooks);
bookRouter.put("/books/updateAuthor", updateAuthor);
bookRouter.delete("/books/deleteBook", deleteBook);

module.exports = bookRouter;
