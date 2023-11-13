import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Search = ({ color = 'currentColor', size }: IconProps) => {
  const fill = translateFill(color);

  return (
    <SvgIcon
      sx={{ width: size || '16px', height: size || '16px', cursor: 'pointer' }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_898_42375)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.75 10.875C3.75 6.93997 6.93997 3.75 10.875 3.75C14.81 3.75 18 6.93997 18 10.875C18 14.81 14.81 18 10.875 18C6.93997 18 3.75 14.81 3.75 10.875ZM10.875 2.25C6.11154 2.25 2.25 6.11154 2.25 10.875C2.25 15.6385 6.11154 19.5 10.875 19.5C12.9867 19.5 14.9211 18.7411 16.4205 17.4812L20.4696 21.5303C20.7625 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L17.4812 16.4205C18.7411 14.9212 19.5 12.9867 19.5 10.875C19.5 6.11154 15.6385 2.25 10.875 2.25Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_898_42375">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
