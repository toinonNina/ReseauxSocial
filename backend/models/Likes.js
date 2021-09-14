const mysql = require('mysql2');

const Likes = function(likes) {
    this.likeId = likes.likeId;
    this.users_id = likes.users_id;
    this.posts_id = likes.posts_id;
}

module.exports = Likes;