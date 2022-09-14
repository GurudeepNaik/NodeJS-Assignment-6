const mongooose = require('mongoose');

const blogSchema = new mongooose.Schema({
    // Your code goes here
    topic:{type:String,required:true},
    description:{type:String},
    posted_at:{type:String},
    posted_by:{type:String}
},{timestamps:true})

const Blog = mongooose.model('Blog', blogSchema);

module.exports = Blog;