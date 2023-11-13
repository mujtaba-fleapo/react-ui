import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Info = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_898_42482)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM12.025 9C12.6463 9 13.15 8.49632 13.15 7.875C13.15 7.25368 12.6463 6.75 12.025 6.75C11.4037 6.75 10.9 7.25368 10.9 7.875C10.9 8.49632 11.4037 9 12.025 9ZM11.5 11C11.3619 11 11.25 11.1119 11.25 11.25V16.75C11.25 16.8881 11.3619 17 11.5 17H12.5C12.6381 17 12.75 16.8881 12.75 16.75V11.25C12.75 11.1119 12.6381 11 12.5 11H11.5Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_898_42482">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
