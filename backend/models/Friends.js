const mysql = require('mysql2');

const Friends = function(friends) {
    this.id = friends.id;
    this.user_id2 = friends.user_id2;
    this.state = friends.state;
    this.users_id = friends.users_id;
}

module.exports = Friends;