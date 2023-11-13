import { Box } from '@mui/material';
import './App.css';
// import { MessageThread } from './components/messaging/MessageThread';
// import { MobileHeader } from './components/navigation/MobileHeader';
// import { MobileNavigation } from './components/navigation/MobileNavigation';
import { CreatorPost } from './components/post/CreatorPost';
import './styles/globals.scss';
import './styles/style.scss';

const messages = [
  {
    timestamp: '03 November 2023',
    messages: [
      {
        id: '8173',
        senderId: '9854ktPMzZBrKpZAgXCqPvKVYkJZ',
        receiverId: 'RbHTub686EN0wK0kvMfcbTa1uAy1',
        messageCost: 0,
        text: 'nn',
        media: {
          id: '8173',
          senderId: '9854ktPMzZBrKpZAgXCqPvKVYkJZ',
          receiverId: 'RbHTub686EN0wK0kvMfcbTa1uAy1',
          paidMedia: false,
          price: 15,
          expiringDate: '2024-10-07T12:00:00.000Z',
          purchased: false,
          assets: [
            {
              id: '1',
              assetType: 'video',
              assetUrl: 'bqJa6rBmfUpV00zSJyezvhaxBlQPXHOlAPOjrAzErUIY',
              assetThumbnailUrl:
                'https://image.mux.com/bqJa6rBmfUpV00zSJyezvhaxBlQPXHOlAPOjrAzErUIY/thumbnail.png?width=289&height=289&fit_mode=smartcrop'
            }
          ]
        },
        createdAt: '2023-11-03T17:38:46.703Z'
      }
    ]
  },
  {
    timestamp: '04 November 2023',
    messages: [
      {
        id: '8260',
        senderId: '9854ktPMzZBrKpZAgXCqPvKVYkJZ',
        receiverId: 'RbHTub686EN0wK0kvMfcbTa1uAy1',
        messageCost: 0,
        text: 'asdf',
        createdAt: '2023-11-03T20:20:04.233Z'
      }
    ]
  },
  {
    timestamp: 'Yesterday',
    messages: [
      {
        id: '8269',
        senderId: '9854ktPMzZBrKpZAgXCqPvKVYkJZ',
        receiverId: 'RbHTub686EN0wK0kvMfcbTa1uAy1',
        messageCost: 0,
        text: 'asdf',
        media: {
          id: '8269',
          senderId: '9854ktPMzZBrKpZAgXCqPvKVYkJZ',
          receiverId: 'RbHTub686EN0wK0kvMfcbTa1uAy1',
          paidMedia: false,
          price: 15,
          expiringDate: '2024-10-07T12:00:00.000Z',
          purchased: false,
          assets: [
            {
              id: '1',
              assetType: 'image',
              assetUrl:
                'https://storage.googleapis.com/fanfix2/PostMedia/9854ktPMzZBrKpZAgXCqPvKVYkJZ/0b4c80ae-41d9-4566-bafe-047872400ab3_original.jpg'
            }
          ]
        },
        createdAt: '2023-11-06T18:28:21.319Z'
      }
    ]
  },
  {
    timestamp: 'Today',
    messages: [
      {
        id: '8280',
        senderId: '9854ktPMzZBrKpZAgXCqPvKVYkJZ',
        receiverId: 'RbHTub686EN0wK0kvMfcbTa1uAy1',
        messageCost: 0,
        text: '',
        media: {
          id: '8280',
          senderId: '9854ktPMzZBrKpZAgXCqPvKVYkJZ',
          receiverId: 'RbHTub686EN0wK0kvMfcbTa1uAy1',
          paidMedia: false,
          price: 15,
          expiringDate: '2024-10-07T12:00:00.000Z',
          purchased: false,
          assets: [
            {
              id: '1',
              assetType: 'image',
              assetUrl:
                'https://storage.googleapis.com/fanfix2/PostMedia/9854ktPMzZBrKpZAgXCqPvKVYkJZ/9afc1c92-b571-4c99-9fd9-0c84f22985b5_original.jpeg'
            },
            {
              id: '1',
              assetType: 'image',
              assetUrl:
                'https://storage.googleapis.com/fanfix2/PostMedia/9854ktPMzZBrKpZAgXCqPvKVYkJZ/9afc1c92-b571-4c99-9fd9-0c84f22985b5_original.jpeg'
            },
            {
              id: '1',
              assetType: 'image',
              assetUrl:
                'https://storage.googleapis.com/fanfix2/PostMedia/9854ktPMzZBrKpZAgXCqPvKVYkJZ/9afc1c92-b571-4c99-9fd9-0c84f22985b5_original.jpeg'
            }
          ]
        },
        createdAt: '2023-11-07T12:06:43.319Z'
      }
    ]
  }
];

const assets = [
  {
    id: '5baaba90-30e8-4dd8-8189-660dccea9e4c',
    url: 'https://loremflickr.com/1080/1440?lock=1515442449416192',
    resizedUrl: 'https://loremflickr.com/1080/1440?lock=1515442449416192',
    isFree: true,
    type: 'undefined'
  },
  {
    id: '28419fc9-62f1-4c7f-90c3-fa8c3fb7bec6',
    url: 'https://loremflickr.com/1080/1440?lock=6242380774637568',
    resizedUrl: 'https://loremflickr.com/1080/1440?lock=6242380774637568',
    isFree: true,
    type: 'undefined'
  },
  {
    id: 'd68774e1-b9db-4ea4-851b-cdb5186d30f4',
    url: 'https://loremflickr.com/1080/1440?lock=7704389426872320',
    resizedUrl: 'https://loremflickr.com/1080/1440?lock=7704389426872320',
    isFree: true,
    type: 'undefined'
  },
  {
    id: '4ae2a6c0-1efd-44c9-b13e-6fe748662e98',
    url: 'https://loremflickr.com/1080/1440?lock=1678958714159104',
    resizedUrl: 'https://loremflickr.com/1080/1440?lock=1678958714159104',
    isFree: true,
    type: 'undefined'
  }
];

function App() {
  return (
    <>
      <Box margin={'10px auto'} maxWidth={'420px'}>
        <CreatorPost
          id={''}
          avatarImage={''}
          username={''}
          caption={''}
          likeCount={0}
          commentCount={0}
          assets={assets}
        />
        {/* <MobileHeader variant="white" title="Messages" />
        <MobileNavigation
          activePath={'/'}
          items={[
            {
              icon: 'Home',
              linkName: 'dashboard',
              onClick: () => null,
              unReadCount: 0
            },
            {
              icon: 'Cards',
              linkName: 'posts',
              onClick: () => null,
              unReadCount: 0
            },
            {
              icon: 'Message',
              linkName: 'messages',
              onClick: () => null,
              unReadCount: 0
            },
            {
              icon: 'Image',
              linkName: 'media',
              onClick: () => null,
              unReadCount: 0
            },
            {
              icon: 'Community',
              linkName: 'community',
              onClick: () => null,
              unReadCount: 0
            },
            {
              icon: 'HorizontalCircleDots',
              linkName: 'settings',
              onClick: () => null,
              unReadCount: 0
            }
          ]}
        /> */}
        {/* <MessageThread
          messages={messages}
          loggedInUserId={'9854ktPMzZBrKpZAgXCqPvKVYkJZ'}
          creatorAvatar={'https://picsum.com/200/200'}
          userAvatar={'https://picsum.com/200/200'}
          isUserCreator={true}
        /> */}
      </Box>
    </>
  );
}

export default App;
