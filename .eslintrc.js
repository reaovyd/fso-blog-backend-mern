module.exports = {
	"env": {
		"node": true,
		"commonjs": true,
		"es2021": true,
		"jest" : true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": "latest"
	},
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		],
		"eqeqeq": "error",
		"no-trailing-spaces": "error",
		"arrow-spacing": [
			"error", {"before": true, "after": true}
		],
		"no-console": 0
	}
}
