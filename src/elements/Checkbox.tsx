import { ThemeProvider } from '@emotion/react';
import MuiCheckbox from '@mui/material/Checkbox';
import { theme } from '../theme';

interface Props {
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (e: boolean) => void;
}

export const Checkbox = (props: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MuiCheckbox
          data-testid={`check-box-ds`}
          checked={props.isChecked}
          disabled={props.isDisabled}
          sx={{ p: 0 }}
          onChange={(e) => props.onChange?.(e.target.checked)}
        />
      </ThemeProvider>
    </>
  );
};
