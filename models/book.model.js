
// Schema
// Book (namn, år, läst/ej läst)

    const mongoose = require("mongoose");

    const bookSchema = mongoose.Schema({

        name: {
            type: String,
            required: [true, "- Titel måste anges."]
        },
        year: {
            type: Number,
            required: [true, "- Skriv in ett utgivningsår."]
        },
        read: {
            type: Boolean,
            required: [true, "- Ange om du har läst/ej läst."]
        }

        //name: String,
        //year: Number,
        //read: Boolean
    
    });

    const Book = mongoose.model("Book", bookSchema);

    module.exports = Book;