import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Notification = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_898_42493)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.75724 5.50736C8.88246 4.38214 10.4086 3.75 11.9999 3.75C13.5912 3.75 15.1173 4.38214 16.2425 5.50736C17.3677 6.63258 17.9999 8.1587 17.9999 9.75C17.9999 13.1895 18.7913 16.0301 19.4972 17.25L15.0023 17.25C15.0015 17.25 15.0008 17.25 15 17.25C14.9992 17.25 14.9985 17.25 14.9977 17.25L9.00148 17.25C9.00099 17.25 9.0005 17.25 9 17.25C8.99951 17.25 8.99901 17.25 8.99852 17.25L4.5044 17.25C5.20924 16.0304 5.99988 13.1888 5.99988 9.75C5.99988 8.1587 6.63203 6.63258 7.75724 5.50736ZM8.32575 18.75H4.49537C4.23284 18.7484 3.97531 18.6779 3.74854 18.5457C3.52176 18.4134 3.33368 18.2239 3.2031 17.9961C3.07252 17.7683 3.004 17.5103 3.0044 17.2477C3.0048 16.9852 3.0741 16.7274 3.20537 16.5C3.73611 15.5819 4.49989 13.0252 4.49989 9.75C4.49989 7.76088 5.29006 5.85322 6.69658 4.4467C8.10311 3.04018 10.0108 2.25 11.9999 2.25C13.989 2.25 15.8967 3.04018 17.3032 4.4467C18.7097 5.85322 19.4999 7.76088 19.4999 9.75C19.4999 13.026 20.2644 15.5812 20.7958 16.4992C20.9273 16.7269 20.997 16.9858 20.9972 17.2487C20.9975 17.5115 20.9286 17.7698 20.7976 17.9977C20.6666 18.2256 20.478 18.415 20.2507 18.5471C20.0234 18.6791 19.7654 18.7491 19.5025 18.75L19.4999 18.75H15.6743C15.5283 19.4651 15.1754 20.1279 14.6517 20.6516C13.9484 21.3549 12.9946 21.75 12 21.75C11.0054 21.75 10.0516 21.3549 9.34835 20.6516C8.82456 20.1279 8.47173 19.4651 8.32575 18.75ZM9.87868 18.75C9.9895 19.0634 10.1695 19.3514 10.409 19.591C10.831 20.0129 11.4033 20.25 12 20.25C12.5967 20.25 13.169 20.0129 13.591 19.591C13.8305 19.3514 14.0105 19.0634 14.1213 18.75H9.87868Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_898_42493">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
