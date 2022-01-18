const routerHandler = require("express").Router()
const Blog = require("../models/schema")

routerHandler.get("/", (req, res, next) => {
	Blog.find({}).then(blogs => {
		res.json(blogs)
	}).catch(err => {
		next(err)
	})
})

routerHandler.get("/:id", (req, res, next) => {
	Blog.findById(req["params"]["id"]).then(blog => {
		if(blog) {
			res.json(blog)
		} else {
			next(err)
		}
	}).catch(err => next(err))
})

routerHandler.post("/", (req, res, next) => {
	const newBlog = Blog({
		title: req["body"]["title"],
		author: req["body"]["author"],
		url: req["body"]["url"],
		likes: 0
	})
	console.log(newBlog)
	newBlog.save().then(blog => {
		res.json(blog)
	}).catch(err => next(err))
})

routerHandler.delete("/:id", (req, res, next) => {
	Blog.findByIdAndDelete(req["params"]["id"]).then(blog => {
		if(blog) {
			res.json(blog)
		} else {
			next(blog)
		}
	}).catch(err => next(err))
})

routerHandler.put("/:id", (req, res, next) => {
	const newBlog = {
		title: req["body"]["title"],
		author: req["body"]["author"],
		url: req["body"]["url"]
	}

	Blog.findByIdAndUpdate(req["params"]["id"], newBlog, {new: true}).then(blog => {
		if(blog) {
			res.json(blog)
		} else {
			next(blog)
		}
	}).catch(err => next(err))
})

module.exports = routerHandler
