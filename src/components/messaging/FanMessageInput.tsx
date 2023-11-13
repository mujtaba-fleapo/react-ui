import { ThemeProvider } from '@emotion/react';
import { Box, IconButton, Input } from '@mui/material';
import { Send } from '../../elements/icons';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface Props {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSend: () => void;
  disabled: boolean;
  placeHolder?: string;
  messageCost: number;
}

export const FanMessageInput = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box data-testid={`fan-message-input-box-ds`} width={'100%'}>
        <Box
          display={'flex'}
          alignItems={'center'}
          minWidth={280}
          gap={1}
          width={'100%'}
          mb={'2px'}
        >
          <Box
            component={'form'}
            flex={1}
            bgcolor={colors.lightgray[200]}
            borderRadius={'4px'}
            sx={{ height: '40px' }}
            onSubmit={(e) => {
              e.preventDefault();
              props.onSend();
            }}
          >
            <Input
              value={props.value}
              disableUnderline={true}
              onChange={(e) => props.onChange(e)}
              disabled={props.disabled}
              placeholder={props.placeHolder || ''}
              inputProps={{
                underline: {
                  '&::before': {
                    borderBottom: 0,
                    background: 'red'
                  }
                },
                sx: {
                  '&::placeholder': {
                    color: colors.black,
                    fontSize: '16px',
                    fontWeight: 400
                  }
                }
              }}
              sx={{
                width: '100%',
                height: '100%',
                border: 0,
                background: colors.lightgray[200],
                px: '12px',
                fontSize: '16px',
                borderRadius: '4px'
              }}
            />
          </Box>
          <Box
            bgcolor={
              props.disabled || !props.value
                ? colors.darkgray[100]
                : colors.black
            }
            width={40}
            height={40}
            borderRadius={'50%'}
          >
            <IconButton
              disabled={props.disabled || !props.value}
              onClick={props.onSend}
              sx={{
                width: '100%',
                height: '100%',
                '& svg': {
                  width: '16px',
                  height: '16px'
                }
              }}
            >
              <Send color="#fff" />
            </IconButton>
          </Box>
        </Box>
        {/* <Typography className="interSemibold12">
          ${props.messageCost.toPrecision(2)}
        </Typography> */}
      </Box>
    </ThemeProvider>
  );
};
