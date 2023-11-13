// MessageThread.stories.ts|tsx

import { Meta, StoryObj } from '@storybook/react';

import { Alert, Box, Link, Typography } from '@mui/material';
import { dummyMessages } from '../components/messaging/MessageData';
import { MessageThread } from '../components/messaging/MessageThread';

const meta: Meta<typeof MessageThread> = {
  component: MessageThread,
  title: '4. Components/MessageThread',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof MessageThread>;

export const Brand: Story = {
  args: {
    messages: dummyMessages,
    onClick: (e) => {
      const isLockedNotPurchased = e.media?.paidMedia && !e.media?.purchased;
      if (isLockedNotPurchased) {
        alert('locked not purchased');
      }
      const isUnlocked = !e.media?.paidMedia;
      if (isUnlocked) {
        alert('unlocked');
      }
    }
  }
};

Brand.storyName = `🔶 MessageThread`;
export const DesktopFanMessageThread: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <MessageThread /> component`}</Alert>
  )
};
export const MobileFanMessageThread: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <MessageThread /> component`}</Alert>
  )
};
export const DesktopCreatorMessageThread: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <MessageThread /> component`}</Alert>
  )
};
export const MobileCreatorMessageThread: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <MessageThread /> component`}</Alert>
  )
};
export const MobileCreatorMessageBlast: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <MessageThread /> component`}</Alert>
  )
};
const FigmaPreview = (props: any): JSX.Element => {
  return (
    <div
      style={{
        width: '90vw',
        height: '90vh'
      }}
    >
      <Box>
        {props.notImplemented && (
          <Typography variant="body1" gutterBottom sx={{ color: 'red' }}>
            NOT IMPLEMENTED
          </Typography>
        )}
        {props.inprogress && (
          <Typography variant="body1" gutterBottom sx={{ color: 'orange' }}>
            IN PROGRESS
          </Typography>
        )}
        {props.ok && (
          <Typography variant="body1" gutterBottom sx={{ color: 'green' }}>
            VERIFIED
          </Typography>
        )}
        <Link target="_blank" href={props.url} variant="body1">
          URL: {props.url}
        </Link>
      </Box>
      <iframe
        title="Figma Preview"
        style={{ border: '1px dotted black' }}
        width="100%"
        height="100%"
        src={props.url}
      ></iframe>
    </div>
  );
};

export const Figma: Story = {
  render: (): JSX.Element => (
    <FigmaPreview
      ok
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D292%253A5618%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
