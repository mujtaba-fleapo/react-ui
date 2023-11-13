import { Grid } from '@mui/material';
import { colors } from '../../styles/colors';
import { NotificationListItem } from './NotificationListItem';

export interface NotificationItem {
  firstName: string;
  lastName: string;
  message: string;
  avatar: string;
  unRead?: boolean;
  id: string;
}

interface Props {
  items: NotificationItem[];
  onClick: (item: NotificationItem) => void;
}

export const NotificationList = ({ items, onClick }: Props) => {
  return (
    <Grid container width={'100%'}>
      {items.map((item, index) => (
        <Grid
          data-testid={`notification-list-item-${index}-grid-ds`}
          item
          md={12}
          key={index}
          px={0}
          width={'100%'}
          sx={{
            '&:not(:first-child)': { paddingTop: '2px' },
            '&:not(:last-child)': {
              paddingBottom: '12px',
              borderBottom: `1px solid ${colors.lightgray[400]}`
            }
          }}
        >
          <NotificationListItem
            data-testid={`notification-list-item-ds`}
            firstName={item.firstName}
            lastName={item.lastName}
            unRead={item.unRead}
            message={item.message}
            avatar={item.avatar}
            onClick={() => onClick(item)}
          />
        </Grid>
      ))}
    </Grid>
  );
};
