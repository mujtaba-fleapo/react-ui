import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Filter = ({ color = 'currentColor', size }: IconProps) => {
  const fill = translateFill(color);

  return (
    <SvgIcon
      sx={{ width: size || '16px', height: size || '16px', cursor: 'pointer' }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_898_42510)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 7.5C1.5 7.08579 1.83579 6.75 2.25 6.75H21.75C22.1642 6.75 22.5 7.08579 22.5 7.5C22.5 7.91421 22.1642 8.25 21.75 8.25H2.25C1.83579 8.25 1.5 7.91421 1.5 7.5Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 16.5C9 16.0858 9.33579 15.75 9.75 15.75H14.25C14.6642 15.75 15 16.0858 15 16.5C15 16.9142 14.6642 17.25 14.25 17.25H9.75C9.33579 17.25 9 16.9142 9 16.5Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_898_42510">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
