import { ThemeProvider } from '@emotion/react';
import { IconButton, InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Typography } from '../../elements/Typography';
import { Eye, Eyeslash, Search } from '../../elements/icons';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface Props {
  id: string;
  width?: string;
  label?: string;
  variant?: 'standard' | 'outlined';
  type?: 'search' | 'text' | 'password' | 'email' | 'currency';
  placeholder?: string;
  onChange?: (e: any) => void;
  value?: string | number;
  disabled?: boolean;
  chartCount?: boolean;
  hasCharacterLimit?: boolean;
}

const currencyFormatter = (amount: number | string) => {
  return Number(amount)
    .toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    })
    .split('$')[1];
};

const numberRegex = /^[0-9]+$/;

export const Input = (props: Props) => {
  const CHARACTER_LIMIT = 50;

  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState(props.value || '');

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e: any) => e.preventDefault();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let _value = e.target.value;

    if (String(_value).length === 0) {
      setValue('');
      props.onChange?.('');
      return;
    }

    if (props.type === 'currency') _value = _value.replace(/,/g, '');

    if (props.hasCharacterLimit && String(_value).length > CHARACTER_LIMIT)
      return;
    else if (props.type === 'currency' && !numberRegex.test(_value)) return;

    const parsedValue =
      props.type === 'currency' ? currencyFormatter(_value) : _value;

    setValue(parsedValue);
    props.onChange?.(_value);
  };

  return (
    <ThemeProvider theme={theme}>
      <TextField
        style={{ width: props.width || '100%' }}
        data-testid={`input-${props.id
          .toLocaleLowerCase()
          .replace(/\s+/g, '-')}-ds`}
        value={value}
        id={props.id}
        name={props.id}
        label={props.label}
        disabled={props.disabled}
        variant={props.variant || 'standard'}
        type={showPassword ? 'text' : props.type}
        placeholder={props.placeholder}
        onChange={handleChange}
        InputLabelProps={{
          shrink: value ? true : false
        }}
        InputProps={
          ['password', 'search', 'currency'].includes(props.type || '') ||
          props.hasCharacterLimit
            ? {
                endAdornment: (
                  <>
                    {props.type === 'password' && (
                      <InputAdornment
                        data-testid={`input-adornment-${props.id
                          .toLocaleLowerCase()
                          .replace(/\s+/g, '-')}-ds`}
                        position="end"
                      >
                        <IconButton
                          data-testid={`input-icon-button-${props.id
                            .toLocaleLowerCase()
                            .replace(/\s+/g, '-')}-ds`}
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Eye /> : <Eyeslash />}
                        </IconButton>
                      </InputAdornment>
                    )}
                    {props.hasCharacterLimit && (
                      <Typography
                        className="interRegular12"
                        sx={{ color: colors.grayText, pl: 1 }}
                      >
                        {String(value).length}/{CHARACTER_LIMIT}
                      </Typography>
                    )}
                    {props.type === 'search' && (
                      <InputAdornment
                        data-testid={`input-adornment-search-${props.id}-ds`}
                        position="end"
                      >
                        <IconButton
                          data-testid={`input-icon-button-search-${props.id
                            .toLocaleLowerCase()
                            .replace(/\s+/g, '-')}-ds`}
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <Search size="20px" />
                        </IconButton>
                      </InputAdornment>
                    )}
                  </>
                ),
                startAdornment: (
                  <>
                    {props.type === 'currency' && value && (
                      <Typography className="interRegular16">$</Typography>
                    )}
                  </>
                )
              }
            : {}
        }
      />
    </ThemeProvider>
  );
};
