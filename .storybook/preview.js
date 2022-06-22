import '../src/main.css'

export const parameters = {
	darkMode: false,
	stylePreview: true,
	actions: {argTypesRegex: "^on[A-Z].*"},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}
