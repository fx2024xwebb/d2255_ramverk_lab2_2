
// Kontroller

const Book = require("../models/book.model");

// Hämta alla inlägg
exports.getAll = async(reqest, h) => {

    try {
        return await Book.find();

    } catch (error) {
        return h.response('Error retrieving from database' + error).code(500);
    }
}

// Lägg till inlägg
exports.addEntry = async(request, h) => {

    try {

        const book = new Book(request.payload);
        return await book.save();

    } catch (error) {
        return h.response('Error with post' + error).code(500);
    }
}

// Uppdatera inlägg
exports.updateEntry = async(request, h) => {

    try {
        
        const id = request.params.id;

        const data = request.payload;

        const name = data.name;
        const year = data.year;
        const read = data.read;

        let result = await Book.updateOne({_id: id}, {$set: { name, year, read }});

        return h.response(result + " Update OK").code(200);

    } catch (error) {
        return h.response({ message: 'Error with update'}).code(500);
    }
}

// Hämta inlägg via ID
exports.getById = async(request, h) => {

    try {

        const id = request.params.id;

        const bookId = await Book.findById(id);

        if (!bookId) {
            return h.response({ message: "ID not found" }).code(404);
        }

        return h.response(bookId + 'ID found').code(200);
                
    } catch (error) {
        return h.response({ message: 'Error with get id' }).code(500);
    }
}

// Ta bort via ID
exports.deleteEntry = async(request, h) => {

    try {

        const id = request.params.id;

        console.log(id); //test

        const result = await Book.deleteOne({_id: id});

        if(!result) {
            return h.response({ message: 'Error'}).code(404);
        }

        return h.response({ message: 'Delete OK' }).code(200);

    }   catch (error) {
        return h.response({ message: 'Error with delete' }).code(500);
    }
}
