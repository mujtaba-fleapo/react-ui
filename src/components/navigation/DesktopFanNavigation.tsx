import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import React from 'react';
import { Avatar } from '../../elements/Avatar';
import { Badge } from '../../elements/Badge';
import { Logo } from '../../elements/Logo';
import { PillButton } from '../../elements/PillButton';
import { DollarSign, Icon, IconType, Message } from '../../elements/icons';
import { colors } from '../../styles/colors';

export type DesktopFanNavigationItem = {
  linkName: string;
  icon: IconType;
  onClick?: (e: React.MouseEvent) => void;
  unReadCount?: number;
};

export interface DesktopFanNavigationProps {
  activePath?: string;
  handleMessage?: (e: React.MouseEvent) => void;
  handleTip?: (e: React.MouseEvent) => void;
  avatar?: string;
  items: DesktopFanNavigationItem[];
  isAssetLoading?: boolean;
}

const drawerWidth = 240;
export const DesktopFanNavigation = ({
  handleMessage,
  handleTip,
  items,
  avatar,
  activePath,
  isAssetLoading
}: DesktopFanNavigationProps) => {
  const getIcon = (icon: IconType) => {
    if (icon === 'Account')
      if (isAssetLoading)
        return (
          <Avatar
            alt="Bot Sharp"
            src="https://fanfix-icons.pages.dev/DefaultAvatar.svg"
            size="31px"
          />
        );
      else return <Avatar alt="Bot Sharp" src={avatar} size="31px" />;
    else return <Icon name={icon} size="24px" />;
  };

  return (
    <>
      <CssBaseline />
      <Box
        data-testid={`desktop-fan-nav-container-ds`}
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 }
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: { xs: '100%', md: drawerWidth },
              height: { xs: 'auto', md: '100%' },
              background: colors.lightgray[100],
              border: 0
            }
          }}
          open
        >
          <Box
            paddingY={5}
            paddingX={3}
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            <Logo size={164} />
          </Box>
          <Box data-testid={`desktop-fan-nav-drawer-ds`} paddingX={'12px'}>
            <List
              data-testid={`desktop-fan-nav-list-ds`}
              sx={{
                display: 'inline',
                width: 'auto',
                padding: 0,
                '& > li:not(:last-child)': {
                  marginBottom: 1
                },
                background: colors.lightgray[100],
                '& .MuiListItemButton-root:hover': {
                  bgcolor: `${colors.lightgray[300]}`,
                  '&, & .MuiListItemIcon-root': {
                    color: 'black'
                  }
                }
              }}
            >
              {items.map((text, index) => (
                <ListItem
                  data-testid={`desktop-fan-nav-list-item-${text.linkName
                    .replace(/\s+/g, '-')
                    .toLowerCase()}-ds`}
                  key={index}
                  disablePadding
                  sx={{
                    padding: 0,
                    backgroundColor:
                      activePath === '/' + text.linkName.toLocaleLowerCase()
                        ? colors.lightgray[300]
                        : 'transparent'
                  }}
                >
                  <ListItemButton
                    data-testid={`desktop-fan-navigation-list-item-button-${index}-ds`}
                    sx={{
                      justifyContent: 'space-between',
                      padding: '8px 12px'
                    }}
                    onClick={(e) => {
                      text.onClick && text.onClick(e);
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 'auto',
                        marginRight: 2,
                        color: colors.black,
                        '&:hover': { background: 'inherit' }
                      }}
                    >
                      {getIcon(text.icon)}
                    </ListItemIcon>
                    <ListItemText primary={text.linkName} />
                    {text.unReadCount && text.unReadCount > 0 && (
                      <ListItemText
                        primary={
                          <Box
                            sx={{ display: 'flex', justifyContent: 'flex-end' }}
                          >
                            <Badge />
                            {/*  need to pass number as props  to start notification trigger */}
                          </Box>
                        }
                        sx={{
                          marginRight: '12px'
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          {/* Buttons Wrapper*/}
          <Box
            data-testid={`desktop-fan-nav-buttons-ds`}
            paddingY={5}
            paddingX={3}
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              display: { xs: 'none', md: 'block' }
            }}
          >
            <PillButton
              data-testid={`desktop-fan-navigation-message-ds`}
              text={'Message'}
              icon={<Message />}
              variant="primary"
              sx={{ width: '192px', innerHeight: '40px' }}
              onClick={(e) => handleMessage && handleMessage(e)}
            />
            <Box sx={{ marginTop: '12px' }}>
              <PillButton
                data-testid={`desktop-fan-navigation-dollar-sign-ds`}
                text={'Tip'}
                icon={<DollarSign />}
                variant="primary"
                sx={{ width: '192px', innerHeight: '40px' }}
                onClick={(e) => handleTip && handleTip(e)}
              />
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};
