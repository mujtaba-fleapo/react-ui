import { ThemeProvider } from '@emotion/react';
import LoadingButton from '@mui/lab/LoadingButton';
import { SxProps, Theme } from '@mui/material';
import { Unlock } from '../elements/icons';
import { theme } from '../theme';

interface Props {
  fullWidth?: boolean;
  text: string | React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  loading?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  variant?: string;
  color?: 'black' | 'gray';
  size?: 'small' | 'medium' | 'large';
  sx?: SxProps<Theme>;
  background?: string;
  backgroundHover?: string;
}

export const PillButton = (props: Props) => {
  const muiButtonType = () => {
    switch (props.variant) {
      case 'primary' || 'unlock':
        return 'contained';
      case 'secondary':
        return 'outlined';
      case 'text':
        return 'text';
      default:
        return 'contained';
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <LoadingButton
          data-testid={`pill-button-${
            props.text && typeof props.text === 'string'
              ? props.text.replace(/\s+/g, '-').toLowerCase()
              : props.variant
          }-ds`}
          fullWidth={props.fullWidth}
          loading={props.loading}
          disabled={props.disabled}
          className="pill-btn"
          loadingPosition={
            props.variant === 'unlock' || props.icon ? 'end' : 'start'
          }
          // loadingPosition="start"
          startIcon={props.variant === 'unlock' ? <Unlock /> : props.icon}
          variant={muiButtonType()}
          type={props.type || 'button'}
          onClick={props.onClick ? (e) => props.onClick?.(e) : undefined}
          size={props.size || 'medium'}
          sx={{
            '& .MuiLoadingButton-loadingIndicatorEnd': {
              left: '0',
              transform: 'translateX(8px)'
            },
            ...props.sx,
            ...(props.variant === 'unlock'
              ? {
                  background: props.background || 'rgba(0, 0, 0, 0.30)',
                  '&:hover': {
                    background: props.backgroundHover || 'rgba(0, 0, 0, 0.30)'
                  }
                }
              : {})
          }}
        >
          {props.text || 'Text'}
        </LoadingButton>
      </ThemeProvider>
    </>
  );
};
