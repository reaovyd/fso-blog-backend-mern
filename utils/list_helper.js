const totalLikes = (blogList) => {
	const noLikeCond = blogList.filter(elem => elem["likes"] === undefined).length
	return noLikeCond === 0 ? blogList.map(elem => Number(elem["likes"])).reduce((acc, item) => acc + item, 0) : undefined
}

const favoriteBlog = (blogList) => {
	const noLikeCond = blogList.filter(elem => elem["likes"] === undefined).length
	if(noLikeCond) {
		return undefined
	}

	return blogList.length === 0 ? undefined : blogList.reduce((acc, elem) => {
		const likes = Number(elem["likes"])
		const accLikes = Number(acc["likes"])
		return likes > accLikes ? elem : acc
	}, blogList[0])
}

const mostBlogs = (blogList) => {
	const noLikeAuthorCond = (blogList.filter(elem => elem["author"] === undefined)).length
	if(noLikeAuthorCond) {
		return {}
	}
	const authors = { }
	blogList.map(elem => elem["author"]).forEach(author => {
		if(authors[author] === undefined) {
			authors[author] = 0
		}
		authors[author] += 1
	})
	const authorNames = Object.keys(authors)
	const name = authorNames.reduce((acc, item) => {
		return Number(authors[acc]) > Number(authors[item]) ? acc : item
	}, authorNames[0])

	const blogs = authors[name]
	const ret = {name, blogs}

	return ret
}

const mostLikes = (blogList) => {
	const noLikeAuthorCond = (blogList.filter(elem => elem["likes"] === undefined)).length || (blogList.filter(elem => elem["author"] === undefined)).length
	if(noLikeAuthorCond) {
		return {}
	}
	const authors = { }
	blogList.map(elem => {
		return {
			"author": elem["author"],
			"likes": elem["likes"]
		}
	}).forEach(elem => {
		if(!authors[elem["author"]]) {
			authors[elem["author"]] = 0
		}
		authors[elem["author"]] += elem["likes"]
	})
	const authorNames = Object.keys(authors)
	const author = authorNames.reduce((acc, item) => {
		return Number(authors[acc]) > Number(authors[item]) ? acc : item
	}, authorNames[0])

	return {author, likes: Number(authors[author])}
}

module.exports = { totalLikes, favoriteBlog, mostBlogs, mostLikes}
