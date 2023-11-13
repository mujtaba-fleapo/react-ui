import { Box, Stack } from '@mui/material';
import { Badge } from '../../elements/Badge';
import { Typography } from '../../elements/Typography';
import { colors } from '../../styles/colors';

interface NavigationItem {
  title: string;
  path: string;
}

interface DesktopCreatorMenuProps {
  NavigationItems: NavigationItem[];
  messagesCount: number;
  onRouteChange: (path: string) => unknown;
  activePath?: string;
}

export const DesktopCreatorMenu = ({
  NavigationItems,
  messagesCount,
  onRouteChange,
  activePath
}: DesktopCreatorMenuProps) => {
  const handleItemClick = (index: number, path: string) => {
    onRouteChange(path);
  };

  return (
    <Stack
      data-testid={`desktop-creator-menu-stack-ds`}
      direction={'row'}
      gap={'8px'}
    >
      {NavigationItems?.map((item, index) => (
        <Box
          data-testid={`desktop-creator-menu-box-ds`}
          bgcolor={
            activePath === item.path ? colors.lightgray[200] : 'transparent'
          }
          borderRadius={32}
          key={index}
          padding={'7px 16px 7px 16px'}
          onClick={() => handleItemClick(index, item.path)}
          sx={{
            cursor: 'pointer',
            '&:hover': { backgroundColor: colors.lightgray[200] }
          }}
        >
          {item.title === 'Messages' ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography className="interMedium14">{item.title}</Typography>
              {messagesCount > 0 && (
                <Badge
                  sx={{ marginLeft: '16px' }}
                  data-testid={`desktop-creator-menu-badge-ds`}
                  number={messagesCount}
                />
              )}
            </Box>
          ) : (
            <Typography className="interMedium14">{item.title}</Typography>
          )}
        </Box>
      ))}
    </Stack>
  );
};
