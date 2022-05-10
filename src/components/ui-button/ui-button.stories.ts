import UiButton from './ui-button.vue';

export default {
    title: 'Components/ui-button',
    component: UiButton,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        classes: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
            description: 'The button size',
        },
        slot: {
            control: { type: 'text' },
            description: 'The slot text or component',
        }
    },
    args:{
        slot: 'default text',
        classes: 'medium',
    },
};

type MyComponentProps = InstanceType<typeof UiButton>["$props"];

const Template = (args: MyComponentProps) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { UiButton },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `<ui-button v-bind="args">${args.slot}</ui-button>`,
});


export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

Primary({});