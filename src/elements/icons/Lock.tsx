import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Lock = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_898_42402)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.1438 3.01884C10.6361 2.52656 11.3038 2.25 12 2.25C12.6962 2.25 13.3639 2.52656 13.8562 3.01884C14.3484 3.51113 14.625 4.17881 14.625 4.875V7.5H9.375V4.875C9.375 4.17881 9.65156 3.51113 10.1438 3.01884ZM7.875 7.5V4.875C7.875 3.78098 8.3096 2.73177 9.08318 1.95818C9.85677 1.1846 10.906 0.75 12 0.75C13.094 0.75 14.1432 1.1846 14.9168 1.95818C15.6904 2.73177 16.125 3.78098 16.125 4.875V7.5H19.5C20.3284 7.5 21 8.17157 21 9V19.5C21 20.3284 20.3284 21 19.5 21H4.5C3.67157 21 3 20.3284 3 19.5V9C3 8.17157 3.67157 7.5 4.5 7.5H7.875ZM15.375 9H8.625H4.5V19.5H19.5V9H15.375Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_898_42402">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
