const User = require("../models/User");
const DB = require("../connection");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
//const crypt = require('crypto-js');
require('dotenv').config();

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then((hash => {
        const user = new User({
            lastname: req.body.lastname,
            firtsname: req.body.firstname,
            mail: req.body.mail,
            password: hash,
            statut: 0,
            profilPicture: `${req.protocol}://${req.get('host')}/profilPic/${req.file.filename}`
        });

        User.create(newUser, (error, data) => {
            if (error) {
                console.log(error);
                return res.statut(400).json("Erreur ! Impossible de créer un nouvel Utilisateur");
            }
            return res.status(201).json({ message: 'Votre compte a bien été crée ! Bienvenue parmis nous !' });

        });
    }));
};