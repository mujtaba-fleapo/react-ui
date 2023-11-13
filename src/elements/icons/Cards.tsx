import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Cards = ({ color = 'currentColor', size }: IconProps) => {
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
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 3.75C5.58579 3.75 5.25 4.08579 5.25 4.5C5.25 4.91421 5.58579 5.25 6 5.25L20.25 5.25V16.5C20.25 16.9142 20.5858 17.25 21 17.25C21.4142 17.25 21.75 16.9142 21.75 16.5V5.25C21.75 4.85218 21.592 4.47065 21.3107 4.18934C21.0294 3.90804 20.6478 3.75 20.25 3.75H6ZM3.75 6.75C2.92157 6.75 2.25 7.42157 2.25 8.25V18.75C2.25 19.5784 2.92157 20.25 3.75 20.25H17.25C18.0784 20.25 18.75 19.5784 18.75 18.75V8.25C18.75 7.42157 18.0784 6.75 17.25 6.75H3.75ZM3.75 8.25H17.25V18.75H3.75V8.25Z"
          fill={fill}
        />
      </svg>
    </SvgIcon>
  );
};
