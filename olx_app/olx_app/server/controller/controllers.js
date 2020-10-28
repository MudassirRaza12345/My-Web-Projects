const Posts = require('../models/postModel');

module.exports = (app) => {
    const Post = [];
    app.get('/api/posts', (req, res) => {

        Posts.create(Post, (result) => {
            res.send(result);
        });
    });
};