const routerHandler = require('express').Router()
const Blog = require('../models/schema')

routerHandler.get('/', (req, res, next) => {
    Blog.find({}).then(blogs => {
        res.json(blogs)
    }).catch(err => {
        next(err)
    })
})

routerHandler.post('/', (req, res, next) => {
    const newBlog = Blog({
        title: req['body']['title'],
        author: req['body']['author'],
        url: req['body']['url'],
        likes: 0
    })
    console.log(newBlog)
    newBlog.save().then(blog => {
        res.json(blog)
    }).catch(err => next(err))
})

module.exports = routerHandler
