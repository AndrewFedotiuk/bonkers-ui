import { mount } from '@vue/test-utils'
import VButton from "./VButton.vue";


describe("VButton.test.ts", () => {
    it('renders props.msg when passed', () => {
        const classes = 'message';
        const wrapper = mount(VButton, {
            props: { classes }
        })

        expect(wrapper.classes()).toContain(classes);
    })
});

