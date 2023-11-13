import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Gridview = ({ color = 'currentColor', size }: IconProps) => {
  const fillColor = translateFill(color);

  return (
    <SvgIcon sx={{ width: size || '24px', height: size || '24px' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <g clipPath="url(#clip0_1991_94915)">
          <path
            d="M8.125 3.75H4.375C4.02982 3.75 3.75 4.02982 3.75 4.375V8.125C3.75 8.47018 4.02982 8.75 4.375 8.75H8.125C8.47018 8.75 8.75 8.47018 8.75 8.125V4.375C8.75 4.02982 8.47018 3.75 8.125 3.75Z"
            stroke={fillColor}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.625 3.75H11.875C11.5298 3.75 11.25 4.02982 11.25 4.375V8.125C11.25 8.47018 11.5298 8.75 11.875 8.75H15.625C15.9702 8.75 16.25 8.47018 16.25 8.125V4.375C16.25 4.02982 15.9702 3.75 15.625 3.75Z"
            stroke={fillColor}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.125 11.25H4.375C4.02982 11.25 3.75 11.5298 3.75 11.875V15.625C3.75 15.9702 4.02982 16.25 4.375 16.25H8.125C8.47018 16.25 8.75 15.9702 8.75 15.625V11.875C8.75 11.5298 8.47018 11.25 8.125 11.25Z"
            stroke={fillColor}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.625 11.25H11.875C11.5298 11.25 11.25 11.5298 11.25 11.875V15.625C11.25 15.9702 11.5298 16.25 11.875 16.25H15.625C15.9702 16.25 16.25 15.9702 16.25 15.625V11.875C16.25 11.5298 15.9702 11.25 15.625 11.25Z"
            stroke={fillColor}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1991_94915">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
