import type { Meta, StoryObj } from '@storybook/react';

import Letter3D from '@/components/home/Letter3D';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Letter3D> = {
    component: Letter3D,
    // render: (args) => <Letter3D {...args} />,
    tags: ['autodocs'],
    parameters: {
        // layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Letter3D>;

export const FirstStory: Story = {
    args: {
    },
};