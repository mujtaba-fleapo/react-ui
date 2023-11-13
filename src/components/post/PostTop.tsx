import { ThemeProvider } from '@emotion/react';
import { Box, IconButton } from '@mui/material';
import { useState } from 'react';
import { Avatar } from '../../elements/Avatar';
import { Typography } from '../../elements/Typography';
import { Horizontaldots } from '../../elements/icons';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';
import { ContextMenu } from '../navigation/ContextMenu';

interface Props {
  avatarSrc?: string;
  avatarSize?: number;
  onAvatarClick?: () => void;
  onOptionsClick?: (key: string) => unknown;
  posterName: string;
  options?: {
    label: string;
    key: string;
    onClick?: () => void;
  }[];
  lastItemIsAlert?: boolean;
}

export const PostTop = ({
  options,
  avatarSrc,
  avatarSize,
  onOptionsClick,
  posterName,
  onAvatarClick,
  lastItemIsAlert
}: Props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  return (
    <ThemeProvider theme={theme}>
      <Box
        data-testid={`post-top-container-ds`}
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1
        }}
      >
        <Box
          data-testid={`post-top-avatar-container-ds`}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer'
          }}
          onClick={onAvatarClick}
        >
          <Avatar src={avatarSrc} size={avatarSize} />
          <Typography className="interSemibold14">{posterName}</Typography>
        </Box>
        {options && (
          <IconButton
            data-testid={`post-top-options-button-ds`}
            onClick={(event: any) => setAnchorEl(event.currentTarget)}
            sx={{
              padding: '3px',
              color: colors.black
            }}
          >
            <Horizontaldots size="24px" />
          </IconButton>
        )}
        {options !== undefined && options?.length > 0 && (
          <ContextMenu
            data-testid={`single-post-context-menu-ds`}
            options={options ?? []}
            open={open}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            onClick={(e: string) => onOptionsClick?.(e)}
            lastItemIsAlert
            disableMobilePanel
          />
        )}
      </Box>
    </ThemeProvider>
  );
};
