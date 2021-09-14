const mysql = require('mysql2');

const Post = function(post) {
    this.id = post.id;
    this.body = post.body;
    this.picture = post.picture;
    this.date = post.date;
    this.time = post.time;
    this.users_id = post.users_id;
}

module.exports = Post;