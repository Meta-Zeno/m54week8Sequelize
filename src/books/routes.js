const { Router } = require("express");
const bookRouter = Router();

const {
  addBook,
  getAllBooks,
  updateAuthor,
  deleteBookByTitle,
  deleteAllBooks,
} = require("./controllers");

bookRouter.post("/books/addBook", addBook);
bookRouter.get("/books/getAllBooks", getAllBooks);
bookRouter.put("/books/updateAuthor", updateAuthor); //change this to title maybe?
bookRouter.delete("/books/deleteBookByTitle", deleteBookByTitle);
bookRouter.delete("/books/deleteAllBooks", deleteAllBooks);

module.exports = bookRouter;
