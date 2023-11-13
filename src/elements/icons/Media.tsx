import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Media = ({ color = 'currentColor', size }: IconProps) => {
  const fill = translateFill(color);

  return (
    <SvgIcon sx={{ width: size || '16px', height: size || '16px' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clipPath="url(#clip0_522_6137)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.68934 4.93934C2.97064 4.65804 3.35217 4.5 3.75 4.5H8.74969C9.07421 4.5 9.38999 4.60525 9.64962 4.79995C9.6496 4.79993 9.64964 4.79997 9.64962 4.79995L12.2502 6.74995L20.25 6.75C20.6478 6.75 21.0294 6.90804 21.3107 7.18934C21.592 7.47065 21.75 7.85218 21.75 8.25V18.8334C21.75 19.2091 21.6008 19.5694 21.3351 19.8351C21.0694 20.1008 20.7091 20.25 20.3334 20.25H3.75C3.35218 20.25 2.97065 20.092 2.68934 19.8107C2.40804 19.5294 2.25 19.1478 2.25 18.75V6C2.25 5.60217 2.40804 5.22064 2.68934 4.93934ZM8.74969 6L3.75 6L3.75 18.75H20.25V8.25H12.2503C11.9258 8.25 11.61 8.14475 11.3504 7.95005C11.3504 7.95003 11.3504 7.95007 11.3504 7.95005L8.74969 6Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_522_6137">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
