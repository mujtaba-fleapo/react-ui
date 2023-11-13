import { Box, IconButton, Input } from '@mui/material';

import { ThemeProvider } from '@emotion/react';
import { Plus, Send } from '../../elements/icons';
import { UploadedFileType } from '../../extras/FileUploader';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface Props {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onAttachmentAdded: (files: UploadedFileType[]) => void;
  onSend: () => void;
  disabled: boolean;
  placeHolder?: string;
  onAddClick: () => void;
}
export const CreatorMessageInput = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box display={'flex'} alignItems={'center'} gap={1} width={'100%'}>
        <Box
          data-testid={`creator-message-input-add-media-ds`}
          bgcolor={colors.lightgray[200]}
          width={40}
          height={40}
          borderRadius={'4px'}
        >
          <IconButton
            disabled={props.disabled}
            data-testid={`creator-message-input-icon-button-ds`}
            onClick={() => props.onAddClick()}
            sx={{
              cursor: 'pointer',
              width: '100%',
              height: '100%',
              '& svg': {
                width: '16px',
                height: '16px'
              }
            }}
          >
            <Plus color="#000" />
          </IconButton>
        </Box>
        <Box
          data-testid={`creator-message-input-box-ds`}
          flex={1}
          bgcolor={colors.lightgray[200]}
          borderRadius={'4px'}
          sx={{ height: '40px' }}
        >
          <Input
            data-testid={`creator-message-input-check-disable-ds`}
            disableUnderline={true}
            value={props.value}
            onChange={(e) => props.onChange(e)}
            contentEditable={!props.disabled}
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
            props.disabled || !props.value ? colors.darkgray[100] : colors.black
          }
          data-testid={`creator-message-send-box-ds`}
          width={40}
          height={40}
          borderRadius={'50%'}
        >
          <IconButton
            disabled={props.disabled || !props.value}
            data-testid={`creator-message-send-button-ds`}
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
    </ThemeProvider>
  );
};
