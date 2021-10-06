const User = require("../models/Users");
const DB = require("../connection");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const fs = require('fs'); // Avoir accès à des opérations liés aux systèmes de fichiers
const { resourceLimits } = require("worker_threads");
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
                status: 0,
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

exports.login = (req, res, next) => {

    User.findOne(req.body.mail, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).json({
                    message: `Le user avec l'email ${req.body.mail} n'a pas été trouvé.`,
                    error: err
                });
            } else {
                res.status(500).json({
                    message: "Erreur de récupération du user avec l'email " + req.body.mail,
                    error: err
                });
            }
        } else {
            bcrypt.compare(req.body.password, data.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !', message: "Mot de passe incorrect !" });
                    } else {
                        res.status(200).json({
                            token: jwt.sign({
                                    userId: data.id,
                                    lastname: data.lastname,
                                    firstname: data.firstname,
                                    mail: data.mail,
                                    status: data.status,
                                    profilPicture: data.profilPicture
                                },
                                process.env.DB_TOKEN, { expiresIn: '24h' }
                            )
                        });
                    }
                }).catch(error => res.status(500).json({ error }));
        }
    });

};