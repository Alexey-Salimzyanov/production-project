import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    component: Modal,

};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perspiciatis magni earum ipsam esse labore, assumenda officia maiores ratione, necessitatibus voluptatem maxime, architecto voluptate dolor asperiores nesciunt repudiandae tenetur nisi.',
    },
};
export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perspiciatis magni earum ipsam esse labore, assumenda officia maiores ratione, necessitatibus voluptatem maxime, architecto voluptate dolor asperiores nesciunt repudiandae tenetur nisi.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
