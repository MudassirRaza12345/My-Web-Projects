const Posts = require('../models/postModel'),
bodyParser = require('body-parser');

module.exports = app => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
       
    /////   To GET the all posts //////

    app.get('/api/post', (req, res) => {
        Posts.find({}, (err, post) => {
            if(err) throw err;

            res.send(post);
        });
    });

    /////   To GET a single post by calling user name  //////

    app.get('/api/post/:uname', (req, res) => {
        Posts.find({name: req.params.uname}, (err, post) => {
            if(err) throw err;
            res.send(post);
        });
    });

    /////   to POST and PUT/update a post   //////

    app.post('/api/post', (req, res) => {
        if(req.body.id ) {
            Posts.findByIdAndUpdate(req.body.id, 
            {
                name: req.body.name,
                phn_number: req.body.phn_number

            } ,(err, post) => {
                if(err) throw err;

                res.send(post);
            });
        } else{
            var newPost = Posts({
                name: req.body.name,
                phn_number: req.body.phn_number
            });
            newPost.save( (err, post) => {
                if(err) throw err;

                res.send(post);
            });
        }
    });

    /////   To DELETE a post  //////

    app.delete('/api/post', (req, res) => {
        Posts.findByIdAndRemove(req.body.id, (err, post) => {
            if(err) throw err;

            res.send("Success!!");  
        });
    });

};