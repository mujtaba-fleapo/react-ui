import type { Meta, StoryObj } from '@storybook/react';

import { VideoPlayer } from '../lab/VideoPlayer';

const meta: Meta<typeof VideoPlayer> = {
  component: VideoPlayer,
  title: '5. Lab/VideoPlayer',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof VideoPlayer>;

export const Brand: Story = {
  args: {
    videoId: 'OG6Zq19uOjRkjO3bISLWasE2M01Cx8O3o'
  }
};
