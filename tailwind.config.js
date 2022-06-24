const colors = require("./src/_colors.json");

module.exports = {
	darkMode: "class",
	content: ["**/*.{vue, css, js, ts}"],
	theme: {
		colors,
		extend: {},
	},
	plugins: [],
}
