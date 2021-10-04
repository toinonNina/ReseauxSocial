const User = require("../models/Users");
const DB = require("../connection");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const fs = require('fs'); // Avoir accès à des opérations liés aux systèmes de fichiers
//const crypt = require('crypto-js');
require('dotenv').config();

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            const user = new User({
                lastname: req.body.lastname,
                firstname: req.body.firstname,
                mail: req.body.mail,
                password: hash,
                statut: 0,
                profilPicture: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
            });
            User.create(user, (err) => {
                if (err) {
                    console.log(err);
                    res.status(400).json("Erreur ! Impossible de créer un nouvel Utilisateur");
                } else res.status(201).json({ message: 'Votre compte a bien été crée ! Bienvenue parmis nous !' });

            });

        }).catch(error => res.status(500).json({ error }));
};