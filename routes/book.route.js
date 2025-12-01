
// Routes

const bookController = require("../controllers/book.controller");

module.exports = (server) => {

server.route([
        {
            // Route för GET: Hämta alla inlägg
            method: "GET",
            path: "/books",
            handler: bookController.getAll
        },
        {
            // Route för POST: Lägg till nytt inlägg
            method: "POST",
            path: "/books",
            handler: bookController.addEntry
        },
        {
            // Route för DELETE: Ta bort via id
            method: "DELETE",
            path: "/books/{id}",
            handler: bookController.deleteEntry
        },
        {
            // Route för PUT: Update
            method: "PUT",
            path: "/books/{id}",
            handler: bookController.updateEntry
        },
        {
            // Route GET: Hämta specifikt id endast
            method: "GET",
            path: "/books/{id}",
            handler: bookController.getById
        }
    ])
}