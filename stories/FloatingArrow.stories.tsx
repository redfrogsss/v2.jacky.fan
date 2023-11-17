import type { Meta, StoryObj } from '@storybook/react';

import FloatingArrow from '@/components/home/FloatingArrow';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof FloatingArrow> = {
    component: FloatingArrow,
    render: (args) => <FloatingArrow {...args} />,
};

export default meta;
type Story = StoryObj<typeof FloatingArrow>;

export const FirstStory: Story = {
    args: {
        //👇 The args you need here will depend on your component
        // layout: 'fullscreen',
        text: "Scroll Down",
    },
};