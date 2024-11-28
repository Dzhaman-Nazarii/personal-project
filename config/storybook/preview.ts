import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider"

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
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
];