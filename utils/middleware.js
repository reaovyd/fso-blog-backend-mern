const logger = require("./logger")

const errorHandler = (err, req, res, next) => {
	logger.error(err)
	if(err["name"] === "CastError") {
		return res.status(403).json({
			error: "malformatted id"
		})
	} else if(err["name"] === "ValidationError") {
		return res.status(403).json({
			error: err["message"]
		})
	}
	next(err)
}

const unknownEndpointHandler = (req, res) => {
	return res.status(404).json({
		error: "unknown endpoint"
	})
}

module.exports = {errorHandler, unknownEndpointHandler}
