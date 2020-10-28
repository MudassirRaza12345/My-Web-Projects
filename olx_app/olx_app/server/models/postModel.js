const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const postSchema = new Schema({

    name: {
        type: String,
        required: "Enter your name"
    },
    phn_number: {
        type: Number,
        required: "Enter your phone number"
    }

});
const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;