import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const User = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_898_42523)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.25C8.27208 2.25 5.25 5.27208 5.25 9C5.25 11.464 6.57021 13.6196 8.54185 14.7981C5.90423 15.6641 3.72657 17.4974 2.35099 19.8743C2.14352 20.2328 2.26595 20.6917 2.62445 20.8991C2.98296 21.1066 3.44178 20.9842 3.64926 20.6257C5.3407 17.703 8.40045 15.75 12.0001 15.75C15.5998 15.75 18.6595 17.703 20.351 20.6257C20.5585 20.9842 21.0173 21.1066 21.3758 20.8991C21.7343 20.6917 21.8567 20.2328 21.6493 19.8743C20.2737 17.4974 18.0959 15.664 15.4582 14.798C17.4298 13.6195 18.75 11.4639 18.75 9C18.75 5.27208 15.7279 2.25 12 2.25ZM6.75 9C6.75 6.1005 9.1005 3.75 12 3.75C14.8995 3.75 17.25 6.1005 17.25 9C17.25 11.8995 14.8995 14.25 12 14.25C9.1005 14.25 6.75 11.8995 6.75 9Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_898_42523">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
