const express = require('express');

const app = express();
const path = require('path');
// demande POST gestion avec body-parser, afin d'extraire objet JSON 
const bodyParser = require('body-parser');
//Import de helmet pour la sécurisation contre les injections
const helmet = require("helmet");
const sanitizeMiddleware = require("sanitize-middleware");

// const userRoutes = require('./routes/user');
// const postRoutes = require('./routes/post');
// const commRoutes = require('./routes/comment');

//import de dotenv pour gérer des variables cachées  pour sécuriser les infos admin
require('dotenv').config();




//Cors système de sécurité qui empèches les requètes malveillante, ont doit le parametrer avec des headers pour autorisé l'utilisateur a utiliser l'api
app.use((req, res, next) => {
    //tout le monde peut y acceder avec l'étoile
    res.setHeader('Access-Control-Allow-Origin', '*');
    // on donne l'autorisation a utiliser certain entête sur l'objet requète
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    //on donne l'autorisation a utiliser certain methode
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    //on appel next pour passer au middleware suivant
    next();
});

// Sanitize Middleware (Inyection Attacks)
app.use(sanitizeMiddleware());
app.use(bodyParser.json());
app.use(helmet());
// app.use('/images', express.static(path.join(__dirname, 'images')));
// app.use('/api/auth', userRoutes);
// app.use('/api/post', postRoutes);
// app.use('/api/comm', commRoutes);

module.exports = app;