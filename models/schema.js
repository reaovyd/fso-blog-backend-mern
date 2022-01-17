const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 1
    },
    author: String,
    url: String,
    likes: Number
})

blogSchema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id.toString()
        delete obj._id
        delete obj.__v
    }
})

const Blog = mongoose.model('blog', blogSchema) 

module.exports = Blog
