import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Chart = ({ color = 'currentColor', size }: IconProps) => {
  const fill = translateFill(color);

  return (
    <SvgIcon sx={{ width: size || '16px', height: size || '16px' }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_898_42380)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.625 3C14.2108 3 13.875 3.33579 13.875 3.75V7.5H9.375C8.96079 7.5 8.625 7.83579 8.625 8.25V12H4.125C3.71079 12 3.375 12.3358 3.375 12.75V18.75H2.625C2.21079 18.75 1.875 19.0858 1.875 19.5C1.875 19.9142 2.21079 20.25 2.625 20.25H4.125H9.375H14.625H19.875H21.375C21.7892 20.25 22.125 19.9142 22.125 19.5C22.125 19.0858 21.7892 18.75 21.375 18.75H20.625V3.75C20.625 3.33579 20.2892 3 19.875 3H14.625ZM19.125 18.75V4.5H15.375V8.25V18.75H19.125ZM13.875 18.75V9H10.125V12.75V18.75H13.875ZM4.875 13.5H8.625V18.75H4.875V13.5Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_898_42380">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
