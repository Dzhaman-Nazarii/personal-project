import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";

export const parameters = {
    actions: { 
        handles: ['click', 'mouseenter'],
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    StyleDecorator,
];