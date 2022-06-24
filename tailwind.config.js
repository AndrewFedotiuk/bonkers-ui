const colors = require("./src/_colors.json");
const fontSize = require("./src/_font-sizes.json");

module.exports = {
	darkMode: "class",
	content: ["**/*.{vue, css, js, ts}"],
	theme: {
		colors,
		fontSize,
		extend: {},
	},
	plugins: [],
}
