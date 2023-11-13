import { Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import { TransitionProps } from '@mui/material/transitions';
import * as React from 'react';
import { Close } from '../elements/icons';

const StyledPaper = styled(Paper)`
  background-color: rgba(0, 0, 0, 0.6);
  max-width: revert;
  width: 1200px;
  justify-content: center;
`;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface ImageModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
}

export const ImageModal = ({ children, open, onClose }: ImageModalProps) => {
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
        PaperComponent={StyledPaper}
        sx={{ justifyContent: { xs: 'center', md: '' }, userSelect: 'none' }}
      >
        <Box sx={{ position: 'absolute', zIndex: '999', top: '0', right: '0' }}>
          <Box sx={{ textAlign: 'right', m: '20px 20px 0 0 ' }}>
            <IconButton
              edge="end"
              onClick={() => {
                onClose?.();
              }}
              aria-label="close"
              sx={{ color: '#fff' }}
            >
              <Close size="24px" />
            </IconButton>
          </Box>
        </Box>
        <Box>{children}</Box>
      </Dialog>
    </div>
  );
};
