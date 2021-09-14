const mysql = require('mysql2');

const Dislikes = function(dislikes) {
    this.dislikeId = dislikes.dislikeId;
    this.users_id = dislikes.users_id;
    this.posts_id = dislikes.posts_id;
}

module.exports = Dislikes;