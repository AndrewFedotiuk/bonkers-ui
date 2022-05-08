import VButton from './VButton.vue';

export default {
    title: 'Components/VButton',
    component: VButton,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        classes: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        slot:{
            control: { type: 'text' },
        }
    },
};

type MyComponentProps = InstanceType<typeof VButton>["$props"];

const Template = (args: MyComponentProps) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { VButton },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `<v-button v-bind="args">${args.slot}</v-button>`,
});


export const Primary = Template.bind({ slot: 'default text'});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

Primary({args: {classes: 'btn'}});