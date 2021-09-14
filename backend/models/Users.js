const mysql = require('mysql2');

const User = function(user) {
    this.id = user.id;
    this.mail = user.mail;
    this.login = user.login;
    this.pass = user.pass;
    this.profilPicture = user.profilPicture;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.job = user.job;
    this.status = user.status;
    this.race = user.race;
    // this.isAdmin = user.isAdmin;
}

module.exports = User;