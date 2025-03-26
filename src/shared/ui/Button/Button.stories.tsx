import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonVariant } from './Button';

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
        variant: ButtonVariant.CLEAR,
        children: 'Clear button',
    },
};

export const Outline: Story = {
    args: {
        variant: ButtonVariant.OUTLINE,
        children: 'Outline button',
    },
};

export const OutlineSizeL: Story = {
    args: {
        size: ButtonSize.L,
        variant: ButtonVariant.OUTLINE,
        children: 'Outline button',
    },
};

export const OutlineSizeXL: Story = {
    args: {
        size: ButtonSize.XL,
        variant: ButtonVariant.OUTLINE,
        children: 'Outline button',
    },
};

export const OutlineDark: Story = {
    args: {
        variant: ButtonVariant.OUTLINE,
        children: 'OutlineDark button',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const BackgoundVariant: Story = {
    args: {
        variant: ButtonVariant.BACKGROUND,
        children: 'Background button',
    },
};

export const BackgoundInvertedVariant: Story = {
    args: {
        variant: ButtonVariant.BACKGROUND_INVERTED,
        children: 'Background inv button',
    },
};

export const Square: Story = {
    args: {
        square: true,
        variant: ButtonVariant.BACKGROUND_INVERTED,
        children: '>',
    },
};

export const SquareSizeL: Story = {
    args: {
        size: ButtonSize.L,
        square: true,
        variant: ButtonVariant.BACKGROUND_INVERTED,
        children: '>',
    },
};

export const SquareSizeXL: Story = {
    args: {
        size: ButtonSize.XL,
        square: true,
        variant: ButtonVariant.BACKGROUND_INVERTED,
        children: '>',
    },
};
