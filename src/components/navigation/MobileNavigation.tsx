import { List } from '@mui/material';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Avatar } from '../../elements/Avatar';
import { Badge } from '../../elements/Badge';
import { Icon, IconType } from '../../elements/icons';
import { colors } from '../../styles/colors';

export type MobileNavigationItem = {
  linkName: string;
  icon: IconType;
  onClick?: (e: React.MouseEvent) => void;
  unReadCount?: number;
};

interface MobileNavigationProps {
  items: MobileNavigationItem[];
  avatar?: string;
  activePath?: string;
}
export const MobileNavigation = ({
  items,
  avatar,
  activePath
}: MobileNavigationProps) => {
  const getIcon = (
    icon: IconType,
    unReadCount = 0,
    avatar = '/static/images/avatar/1.jpg'
  ) => {
    if (icon === 'Account')
      return <Avatar alt="Remy Sharp" src={avatar} size="31px" />;

    if (icon === 'Message') {
      return (
        <Badge variant="dot">
          <Icon name={icon} size="24px" />
        </Badge>
      );
    }

    let iconElement: JSX.Element = <Icon name={icon} size="24px" />;
    return (
      // Need to pass number={unReadCount} as props when notifications triggered
      <Badge number={unReadCount}>{iconElement}</Badge>
    );
  };

  return (
    <Box component="nav" aria-label="mailbox folders">
      <List
        data-testid={`mobile-navigation-list-ds`}
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          position: 'fixed',
          zIndex: '999',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '12px 0',

          background: colors.lightgray[100],
          '& .MuiListItemButton-root:hover': {
            bgcolor: colors.lightgray[300],
            '&, & .MuiListItemIcon-root': {
              color: colors.black
            }
          }
        }}
      >
        {items.map((item, index) => (
          <ListItem
            data-testid={`mobile-navigation-list-item-${index}-ds`}
            key={index}
            disablePadding
            sx={{
              width: 'auto',
              p: 0
            }}
          >
            <ListItemButton
              data-testid={`mobile-navigation-list-item-button-ds`}
              sx={{
                justifyContent: 'center',
                width: 'auto',
                p: 1,
                borderRadius: 1,
                backgroundColor:
                  activePath === '/' + item.linkName.toLocaleLowerCase()
                    ? colors.lightgray[300]
                    : 'transparent'
              }}
              onClick={item.onClick}
            >
              <ListItemIcon
                data-testid={`mobile-navigation-list-item-icon-ds`}
                sx={{
                  width: 'auto',
                  minWidth: 'auto',
                  color: colors.black
                }}
              >
                {getIcon(item.icon, item.unReadCount || 0, avatar)}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
