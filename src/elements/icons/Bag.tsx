import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Bag = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_898_42488)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868C14.6839 4.44129 15 5.20435 15 6H9C9 5.20435 9.31607 4.44129 9.87868 3.87868ZM7.5 7.5V9C7.5 9.41421 7.83579 9.75 8.25 9.75C8.66421 9.75 9 9.41421 9 9V7.5H15V9C15 9.41421 15.3358 9.75 15.75 9.75C16.1642 9.75 16.5 9.41421 16.5 9V7.5H20.25V18.75H3.75V7.5H7.5ZM7.5 6C7.5 4.80653 7.97411 3.66193 8.81802 2.81802C9.66193 1.97411 10.8065 1.5 12 1.5C13.1935 1.5 14.3381 1.97411 15.182 2.81802C16.0259 3.66193 16.5 4.80653 16.5 6H20.25C21.0784 6 21.75 6.67157 21.75 7.5V18.75C21.75 19.5784 21.0784 20.25 20.25 20.25H3.75C2.92157 20.25 2.25 19.5784 2.25 18.75V7.5C2.25 6.67157 2.92157 6 3.75 6H7.5Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_898_42488">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
