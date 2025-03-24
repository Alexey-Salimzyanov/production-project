import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, VariantButton } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,

};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'Default button',
    },
};

export const Clear: Story = {
    args: {
        variant: VariantButton.CLEAR,
        children: 'Clear button',
    },
};

export const Outline: Story = {
    args: {
        variant: VariantButton.OUTLINE,
        children: 'Outline button',
    },
};
export const OutlineDark: Story = {
    args: {
        variant: VariantButton.OUTLINE,
        children: 'OutlineDark button',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
