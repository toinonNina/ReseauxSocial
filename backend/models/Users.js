const DB = require("../connection");

const User = function(user) {
    this.id = user.id;
    this.mail = user.mail;
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
            console.log("Une erreur est survenue");
            result(err, null);
            return;
        }
        console.log("Utilisateur créé !");
        result(null);

    });
};


module.exports = User;