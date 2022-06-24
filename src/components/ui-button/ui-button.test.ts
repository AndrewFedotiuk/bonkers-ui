import { mount } from "@vue/test-utils"
import UiButton from "./ui-button.vue";

describe("VButton.test.ts", () => {
	it("renders props.msg when passed", () => {
		const classes = "message";
		const wrapper = mount(UiButton, {
			props: { classes }
		});

		expect(wrapper.classes()).toContain(classes);
	})
});
