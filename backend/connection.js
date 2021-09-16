const mysql = require('mysql2');
require('dotenv').config();


const DB = mysql.createConnection({
    host: process.env.DB_LOCALHOST,
    user: process.env.DB_IDENTIFIANT,
    password: process.env.DB_PASSWORD,
    database: 'roleplay'
});

// Test de la connection


DB.connect(
    function(err) {
        if (err) {
            console.log("!!! Connection Impossible !!! Error:");
            throw err;
        } else {
            console.log("Connection établie.");
        }
    });
module.exports = DB;