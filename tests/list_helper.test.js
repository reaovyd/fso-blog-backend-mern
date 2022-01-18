const list_helper = require("../utils/list_helper")

describe("Total likes ", () => {
	test("for no values", () => {
		expect(list_helper.totalLikes([])).toBe(0)
	})
	test("for one value", () => {
		const likes = list_helper.totalLikes([
			{
				_id: "5a422aa71b54a676234d17f8",
				title: "Go To Statement Considered Harmful",
				author: "Edsger W. Dijkstra",
				url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
				likes: 5,
				__v: 0
			}
		])

		expect(likes).toBe(5)
	})

	test("for one value without likes key", () => {
		const likes = list_helper.totalLikes([
			{
				_id: "5a422aa71b54a676234d17f8",
				title: "Go To Statement Considered Harmful",
				author: "Edsger W. Dijkstra",
				url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
				__v: 0
			}
		])
		expect(likes).toBe(undefined)
	})

	test("for multiple values", () => {
		const likes = list_helper.totalLikes([
			{
				_id: "5a422a851b54a676234d17f7",
				title: "React patterns",
				author: "Michael Chan",
				url: "https://reactpatterns.com/",
				likes: 7,
				__v: 0
			},
			{
				_id: "5a422aa71b54a676234d17f8",
				title: "Go To Statement Considered Harmful",
				author: "Edsger W. Dijkstra",
				url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
				likes: 5,
				__v: 0
			},
			{
				_id: "5a422b3a1b54a676234d17f9",
				title: "Canonical string reduction",
				author: "Edsger W. Dijkstra",
				url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
				likes: 12,
				__v: 0
			},
			{
				_id: "5a422b891b54a676234d17fa",
				title: "First class tests",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
				likes: 10,
				__v: 0
			},
			{
				_id: "5a422ba71b54a676234d17fb",
				title: "TDD harms architecture",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
				likes: 0,
				__v: 0
			},
			{
				_id: "5a422bc61b54a676234d17fc",
				title: "Type wars",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
				likes: 2,
				__v: 0
			}
		])

		expect(likes).toBe(36)
	})

	test("for multiple values but some has no likes", () => {
		const likes = list_helper.totalLikes([
			{
				_id: "5a422a851b54a676234d17f7",
				title: "React patterns",
				author: "Michael Chan",
				url: "https://reactpatterns.com/",
				__v: 0
			},
			{
				_id: "5a422aa71b54a676234d17f8",
				title: "Go To Statement Considered Harmful",
				author: "Edsger W. Dijkstra",
				url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
				__v: 0
			},
			{
				_id: "5a422b3a1b54a676234d17f9",
				title: "Canonical string reduction",
				author: "Edsger W. Dijkstra",
				url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
				likes: 12,
				__v: 0
			},
			{
				_id: "5a422b891b54a676234d17fa",
				title: "First class tests",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
				__v: 0
			},
			{
				_id: "5a422ba71b54a676234d17fb",
				title: "TDD harms architecture",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
				likes: 0,
				__v: 0
			},
			{
				_id: "5a422bc61b54a676234d17fc",
				title: "Type wars",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
				__v: 0
			}
		])

		expect(likes).toEqual(undefined)
	})
})

describe("Most favorited blog", () => {
	test("for an empty blog list", () => {
		const favoriteBlog = list_helper.favoriteBlog([])
		expect(favoriteBlog).toBe(undefined)
	})

	test("for a blog list with one value, but no like value", () => {
		const favoriteBlog = list_helper.favoriteBlog([
			{
				_id: "5a422bc61b54a676234d17fc",
				title: "Type wars",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
				__v: 0
			}
		])

		expect(favoriteBlog).toEqual(undefined)
	})

	test("for a blog list with one value", () => {
		const blogList = [
			{
				_id: "5a422bc61b54a676234d17fc",
				title: "Type wars",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
				likes: 300000,
				__v: 0
			}
		]
		const favoriteBlog = list_helper.favoriteBlog(blogList)
		const expectedValue = blogList[0]

		expect(favoriteBlog).toEqual(expectedValue)
	})

	test("for a blog list with multiple values, but has a few missing likes key", () => {
		const blogList = [
			{
				_id: "5a422a851b54a676234d17f7",
				title: "React patterns",
				author: "Michael Chan",
				url: "https://reactpatterns.com/",
				__v: 0
			},
			{
				_id: "5a422aa71b54a676234d17f8",
				title: "Go To Statement Considered Harmful",
				author: "Edsger W. Dijkstra",
				url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
				__v: 0
			},
			{
				_id: "5a422b3a1b54a676234d17f9",
				title: "Canonical string reduction",
				author: "Edsger W. Dijkstra",
				url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
				likes: 12,
				__v: 0
			},
			{
				_id: "5a422b891b54a676234d17fa",
				title: "First class tests",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
				__v: 0
			},
			{
				_id: "5a422ba71b54a676234d17fb",
				title: "TDD harms architecture",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
				likes: 0,
				__v: 0
			},
			{
				_id: "5a422bc61b54a676234d17fc",
				title: "Type wars",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
				__v: 0
			}
		]
		const topLiked = list_helper.favoriteBlog(blogList)
		expect(topLiked).toEqual(undefined)
	})

	test("for a blog list with multiple values", () => {
		const blogList = [
			{
				_id: "5a422a851b54a676234d17f7",
				title: "React patterns",
				author: "Michael Chan",
				url: "https://reactpatterns.com/",
				likes: 7,
				__v: 0
			},
			{
				_id: "5a422aa71b54a676234d17f8",
				title: "Go To Statement Considered Harmful",
				author: "Edsger W. Dijkstra",
				url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
				likes: 5,
				__v: 0
			},
			{
				_id: "5a422b3a1b54a676234d17f9",
				title: "Canonical string reduction",
				author: "Edsger W. Dijkstra",
				url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
				likes: 12,
				__v: 0
			},
			{
				_id: "5a422b891b54a676234d17fa",
				title: "First class tests",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
				likes: 10,
				__v: 0
			},
			{
				_id: "5a422ba71b54a676234d17fb",
				title: "TDD harms architecture",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
				likes: 0,
				__v: 0
			},
			{
				_id: "5a422bc61b54a676234d17fc",
				title: "Type wars",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
				likes: 2,
				__v: 0
			}
		]
		const topLiked = list_helper.favoriteBlog(blogList)
		expect(topLiked).toEqual(blogList[2])
	})

	test("for a blog list with multiple values and same multiple likes", () => {
		const blogList = [
			{
				_id: "5a422a851b54a676234d17f7",
				title: "React patterns",
				author: "Michael Chan",
				url: "https://reactpatterns.com/",
				likes: 7,
				__v: 0
			},
			{
				_id: "5a422aa71b54a676234d17f8",
				title: "Go To Statement Considered Harmful",
				author: "Edsger W. Dijkstra",
				url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
				likes: 5,
				__v: 0
			},
			{
				_id: "5a422b3a1b54a676234d17f9",
				title: "Canonical string reduction",
				author: "Edsger W. Dijkstra",
				url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
				likes: 12,
				__v: 0
			},
			{
				_id: "5a422b891b54a676234d17fa",
				title: "First class tests",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
				likes: 10,
				__v: 0
			},
			{
				_id: "5a422ba71b54a676234d17fb",
				title: "TDD harms architecture",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
				likes: 12,
				__v: 0
			},
			{
				_id: "5a422bc61b54a676234d17fc",
				title: "Type wars",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
				likes: 12,
				__v: 0
			}
		]
		const topLiked = list_helper.favoriteBlog(blogList)
		expect(topLiked).toEqual(blogList[2])
	})
})

describe("most blog post", () => {
	test("with no values", () => {
		expect(list_helper.mostBlogs([])).toEqual({})
	})

	test("with one value", () => {
		const list = [{
			_id: "5a422bc61b54a676234d17fc",
			title: "Type wars",
			author: "Robert C. Martin",
			url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
			likes: 12,
			__v: 0
		}]
		expect(list_helper.mostBlogs(list)).toEqual({name: list[0]["author"], blogs: 1})
	})
	test("with one value, but no author", () => {
		const list = [{
			_id: "5a422bc61b54a676234d17fc",
			title: "Type wars",
			url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
			likes: 12,
			__v: 0
		}]
		expect(list_helper.mostBlogs(list)).toEqual({})
	})
	test("with multiple values, but some no author", () => {
		const blogs = [
			{
				_id: "5a422a851b54a676234d17f7",
				title: "React patterns",
				url: "https://reactpatterns.com/",
				likes: 7,
				__v: 0
			},
			{
				_id: "5a422aa71b54a676234d17f8",
				title: "Go To Statement Considered Harmful",
				author: "Edsger W. Dijkstra",
				url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
				likes: 5,
				__v: 0
			},
			{
				_id: "5a422b3a1b54a676234d17f9",
				title: "Canonical string reduction",
				url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
				likes: 12,
				__v: 0
			},
			{
				_id: "5a422b891b54a676234d17fa",
				title: "First class tests",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
				likes: 10,
				__v: 0
			},
			{
				_id: "5a422ba71b54a676234d17fb",
				title: "TDD harms architecture",
				url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
				likes: 0,
				__v: 0
			},
			{
				_id: "5a422bc61b54a676234d17fc",
				title: "Type wars",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
				likes: 2,
				__v: 0
			}
		]
		expect(list_helper.mostBlogs(blogs)).toEqual({})
	})

	test("with multiple values", () => {
		const blogList = [
			{
				_id: "5a422a851b54a676234d17f7",
				title: "React patterns",
				author: "Michael Chan",
				url: "https://reactpatterns.com/",
				likes: 7,
				__v: 0
			},
			{
				_id: "5a422aa71b54a676234d17f8",
				title: "Go To Statement Considered Harmful",
				author: "Edsger W. Dijkstra",
				url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
				likes: 5,
				__v: 0
			},
			{
				_id: "5a422b3a1b54a676234d17f9",
				title: "Canonical string reduction",
				author: "Edsger W. Dijkstra",
				url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
				likes: 12,
				__v: 0
			},
			{
				_id: "5a422b891b54a676234d17fa",
				title: "First class tests",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
				likes: 10,
				__v: 0
			},
			{
				_id: "5a422ba71b54a676234d17fb",
				title: "TDD harms architecture",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
				likes: 0,
				__v: 0
			},
			{
				_id: "5a422bc61b54a676234d17fc",
				title: "Type wars",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
				likes: 2,
				__v: 0
			}
		]

		expect(list_helper.mostBlogs(blogList)).toEqual({name:"Robert C. Martin", blogs: 3})
	})
})

describe("Most liked author", () => {
	test("with no author", () => {
		expect(list_helper.mostBlogs([])).toEqual({})
	})
	test("with one author, but no author", () => {
		const list = [{
			_id: "5a422bc61b54a676234d17fc",
			title: "Type wars",
			url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
			likes: 2,
			__v: 0
		}]
		expect(list_helper.mostLikes(list)).toEqual({})
	})
	test("with one author, but no likes", () => {
		const list = [{
			_id: "5a422bc61b54a676234d17fc",
			title: "Type wars",
			author: "Robert C. Martin",
			url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
			__v: 0
		}]
		expect(list_helper.mostLikes(list)).toEqual({})
	})
	test("with one author, but no likes and authors", () => {
		const list = [{
			_id: "5a422bc61b54a676234d17fc",
			title: "Type wars",
			url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
			__v: 0
		}]
		expect(list_helper.mostLikes(list)).toEqual({})
	})

	test("with one author", () => {
		const list = [{
			_id: "5a422bc61b54a676234d17fc",
			title: "Type wars",
			author: "Robert C. Martin",
			url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
			likes: 2,
			__v: 0
		}]
		expect(list_helper.mostLikes(list)).toEqual({author: "Robert C. Martin", likes: list[0]["likes"]})
	})

	test("with multiple authors", () => {
		const list = [
			{
				_id: "5a422a851b54a676234d17f7",
				title: "React patterns",
				author: "Michael Chan",
				url: "https://reactpatterns.com/",
				likes: 7,
				__v: 0
			},
			{
				_id: "5a422aa71b54a676234d17f8",
				title: "Go To Statement Considered Harmful",
				author: "Edsger W. Dijkstra",
				url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
				likes: 5,
				__v: 0
			},
			{
				_id: "5a422b3a1b54a676234d17f9",
				title: "Canonical string reduction",
				author: "Edsger W. Dijkstra",
				url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
				likes: 12,
				__v: 0
			},
			{
				_id: "5a422b891b54a676234d17fa",
				title: "First class tests",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
				likes: 10,
				__v: 0
			},
			{
				_id: "5a422ba71b54a676234d17fb",
				title: "TDD harms architecture",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
				likes: 0,
				__v: 0
			},
			{
				_id: "5a422bc61b54a676234d17fc",
				title: "Type wars",
				author: "Robert C. Martin",
				url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
				likes: 2,
				__v: 0
			}
		]
		expect(list_helper.mostLikes(list)).toEqual({author: "Edsger W. Dijkstra", likes: 17})
	})
})
