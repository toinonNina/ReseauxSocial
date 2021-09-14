const mysql = require('mysql2');

const Groupes = function(groupe) {
    this.id = groupe.id;
    this.name = groupe.name;
    this.users_id = groupe.users_id;
}

module.exports = Groupes;