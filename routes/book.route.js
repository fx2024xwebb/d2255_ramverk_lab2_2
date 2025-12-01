// Routes

//const Book = require("../models/book.model");
const bookController = require("../controllers/book.controller");

module.exports = (server) => {

server.route([
        {
            // Route för GET: Hämta alla inlägg
            method: "GET",
            path: "/books",
            handler: bookController.getAll
                /* try {

                    return await Book.find();

                } catch (error) {
                    return h.response('Error retrieving from database' + error).code(500);
                } */
        },
        {
            // Route för POST: Lägg till nytt inlägg
            method: "POST",
            path: "/books",
            handler: bookController.addEntry
                /* try {

                    const book = new Book(request.payload);
                    return await book.save();

                } catch (error) {
                    return h.response('Error with post' + error).code(500);
                }
            } */
        },
        {
            // Route för DELETE: Ta bort via id
            method: "DELETE",
            path: "/books/{id}",
            handler: bookController.deleteEntry
            /* handler: async (request, h) => {

                const id = request.params.id;

                console.log(id); //test

                try {

                    const result = await Book.deleteOne({_id: id});

                    if(!result) {
                        return h.response({ message: 'Error'}).code(404);
                    }

                    return h.response({ message: 'Delete OK' }).code(200);

                }   catch (error) {
                    return h.response({ message: 'Error with delete' }).code(500);
                }
            } */
        },
        {
            // Route för PUT: Update
            method: "PUT",
            path: "/books/{id}",
            handler: bookController.updateEntry
            /* handler: async (request, h) => {

                try {
                    const id = request.params.id;

                    const data = request.payload;

                    const name = data.name;
                    const year = data.year;
                    const read = data.read;

                    //testlogg
                    console.log(data);
                    console.log(name);
                    console.log(year);
                    console.log(read);

                    let result = await Book.updateOne({_id: id}, {$set: { name, year, read }});

                    return h.response(result + " Update OK").code(200);

                }   catch (error) {
                        return h.response({ message: 'Error with update'}).code(500);
                }

            } */
        },
        {
            // Route GET: Hämta specifikt id endast
            method: "GET",
            path: "/books/{id}",
            handler: bookController.getById

            /* handler: async (request, h) => {
                try {
                    const id = request.params.id;

                    const bookId = await Book.findById(id);

                    if (!bookId) {
                        return h.response({ message: "ID not found" }).code(404);
                    }

                    return h.response(bookId + 'ID found').code(200);
                
                }   catch (error) {
                        return h.response({ message: 'Error with get id' }).code(500);
                }
            } */
        }

    ])
}