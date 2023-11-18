// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Navbar from '@/components/Navbar';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Navbar> = {
    component: Navbar,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const FirstStory: Story = {
    args: {
        //👇 The args you need here will depend on your component
    },
};