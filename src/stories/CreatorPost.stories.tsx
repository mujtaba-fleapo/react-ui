// CreatorPost.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '@mui/material';

import { CreatorPost } from '../components/post/CreatorPost';

const meta: Meta<typeof CreatorPost> = {
  component: CreatorPost,
  title: '4. Components/CreatorPost',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof CreatorPost>;

export const Brand: Story = {
  args: {
    id: '1',
    assets: [
      {
        id: '1',
        url: 'https://source.unsplash.com/ulJYHTb86Bo/800x1600',
        isFree: true
      },
      {
        id: '2',
        url: 'https://source.unsplash.com/mMa_cpvxeBU/1600x1600',
        isFree: true
      },
      {
        id: '3',
        url: 'https://source.unsplash.com/mMa_cpvxeBU/1600x1600',
        isFree: true
      }
    ],
    avatarImage: 'https://source.unsplash.com/1600x900/?portrait',
    caption: 'This is a caption',
    commentCount: 10,
    likeCount: 10,
    isLiked: true,
    username: 'Aisha Mian',
    options: [
      {
        label: 'Report',
        value: 'report',
        onClick: () => console.log('Report')
      },
      {
        label: 'Share',
        value: 'share',
        onClick: () => console.log('Share')
      }
    ]
  }
};
Brand.storyName = `🔶 CreatorPost`;

export const DesktopCreatorPost: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <CreatorPost /> component`}</Alert>
  )
};
export const MobileCreatorPost: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <CreatorPost /> component`}</Alert>
  )
};
