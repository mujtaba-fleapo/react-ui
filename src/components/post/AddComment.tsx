import { ThemeProvider } from '@emotion/react';
import { theme } from '../../theme';

import { Box, FormControl, Stack } from '@mui/material';
import Input from '@mui/material/Input';
import { useState } from 'react';
import { Avatar } from '../../elements/Avatar';
import { PillButton } from '../../elements/PillButton';
import { colors } from '../../styles/colors';

interface Props {
  onSubmit: (comment: string) => void;
  loading?: boolean;
  profilePic?: string;
}

export const AddComment = ({ onSubmit, loading, profilePic }: Props) => {
  const [commentText, setCommentText] = useState('');
  return (
    <ThemeProvider theme={theme}>
      <Stack
        data-testid={`add-comment-container-ds`}
        direction="row"
        width={'100%'}
        alignItems={'center'}
        spacing="12px"
      >
        <Avatar src={profilePic} size="40px" alt="Profile Pic" />
        <form
          style={{ width: '100%' }}
          onSubmit={async (e) => {
            e.preventDefault();
            commentText.trim().length > 0 &&
              (await onSubmit?.(commentText.trim()));
            setCommentText('');
          }}
        >
          <FormControl
            data-testid={`add-comment-form-control-ds`}
            fullWidth
            sx={{
              m: 1,
              height: '40px',
              position: 'relative',
              borderRadius: '4px',
              overflow: 'hidden'
            }}
            variant="filled"
          >
            <Input
              data-testid={`add-comment-input-ds`}
              disableUnderline={true}
              disabled={loading}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
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
                    fontSize: '14px',
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
                fontSize: '14px'
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 15,
                background: colors.lightgray[200],
                right: '0'
              }}
              className="add-comment-btn"
            >
              <PillButton
                data-testid={`add-comment-pill-button-ds`}
                text={loading ? 'Posting...' : 'Post'}
                variant="text"
                size="large"
                loading={loading}
                sx={{
                  color: colors.black,
                  opacity: 0.3,
                  borderRadius: 0,
                  p: '0 12px',
                  minWidth: 0
                }}
                onClick={async () => {
                  commentText.trim().length > 0 &&
                    (await onSubmit?.(commentText.trim()));
                  setCommentText('');
                }}
              />
            </Box>

            {/* <FilledInput
            id="outlined-adornment-password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  sx={{ opacity: '0.3', color: colors.black }}
                >
                  <Typography className="interSemibold12">Post</Typography>
                </IconButton>
              </InputAdornment>
            }
          /> */}
          </FormControl>
        </form>
      </Stack>
    </ThemeProvider>
  );
};
