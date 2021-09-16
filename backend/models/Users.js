const DB = require("../connection");

const User = function(user) {
    this.id = user.id;
    this.mail = user.mail;
    this.login = user.login;
    this.password = user.password;
    this.profilPicture = user.profilPicture;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.job = user.job;
    this.status = user.status;
    this.race = user.race;
};

/**************************create***************************/

User.create = (newUser, result) => {
    DB.query("INSERT INTO users SET ? ", newUser, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(error, null);
            return;
        }
        console.log("Utilisateur créé !");
        res.status(200).json({ message: 'Utilisateur créer correctement' });
    });
};


module.exports = User;