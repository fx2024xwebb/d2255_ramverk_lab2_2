
// Server JS

'use strict';

const Hapi = require('@hapi/hapi');
const { request } = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// init funktion
const init = async () => {

    const server = Hapi.server({
        port: 5000,
        host: '0.0.0.0',
        routes: {
            cors: {
                origin: ['*'],
                //methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"], Funkar ej??
                headers: ['Accept', 'Authorization', 'Content-Type'],
                credentials: false
            },
        }
    });


    // Databasanslutning
    mongoose.connect(process.env.DATABASE).then(() => {
        console.log("MongoDb connect OK");
    }).catch((error) => {
        console.error("Error connecting to database:" + error);
    }); 

    // Anslut till routes
    require("./routes/book.route")(server);

    // Start
    await server.start();
    console.log('Server OK, %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    
    console.log(err);
    process.exit(1);
});

// Kör init...
init();
