import UiColors from "./ui-colors.vue";

export default {
	title: "Example/Colors",
	component: UiColors,
}

const Template = () => ({
	components: { UiColors },
	template: `<ui-colors/>`,
});

export const colors = Template();
