import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const HorizontalCircleDots = ({
  color = 'currentColor',
  size
}: IconProps) => {
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
        <g clipPath="url(#clip0_276_6074)">
          <path
            d="M13.125 12C13.125 12.6213 12.6213 13.125 12 13.125C11.3787 13.125 10.875 12.6213 10.875 12C10.875 11.3787 11.3787 10.875 12 10.875C12.6213 10.875 13.125 11.3787 13.125 12Z"
            fill={fill}
          />
          <path
            d="M16.125 13.125C16.7463 13.125 17.25 12.6213 17.25 12C17.25 11.3787 16.7463 10.875 16.125 10.875C15.5037 10.875 15 11.3787 15 12C15 12.6213 15.5037 13.125 16.125 13.125Z"
            fill={fill}
          />
          <path
            d="M9 12C9 12.6213 8.49632 13.125 7.875 13.125C7.25368 13.125 6.75 12.6213 6.75 12C6.75 11.3787 7.25368 10.875 7.875 10.875C8.49632 10.875 9 11.3787 9 12Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.25 16.5563 16.5563 20.25 12 20.25C7.44365 20.25 3.75 16.5563 3.75 12Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_276_6074">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
