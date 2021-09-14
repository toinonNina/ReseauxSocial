const mysql = require('mysql2');

const Comment = function(comment) {
    this.id = comment.id;
    this.content = comment.content;
    this.dateCreate = comment.dateCreate;
    this.users_id = comment.users_id;
    this.posts_id = comment.posts_id;
}

module.exports = Comment;