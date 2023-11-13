import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Verticaldots = ({ color = 'currentColor', size }: IconProps) => {
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
          d="M12 7.125C12.8284 7.125 13.5 6.45343 13.5 5.625C13.5 4.79657 12.8284 4.125 12 4.125C11.1716 4.125 10.5 4.79657 10.5 5.625C10.5 6.45343 11.1716 7.125 12 7.125Z"
          fill={fill}
        />
        <path
          d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z"
          fill={fill}
        />
        <path
          d="M13.5 18.375C13.5 19.2034 12.8284 19.875 12 19.875C11.1716 19.875 10.5 19.2034 10.5 18.375C10.5 17.5466 11.1716 16.875 12 16.875C12.8284 16.875 13.5 17.5466 13.5 18.375Z"
          fill={fill}
        />
      </svg>
    </SvgIcon>
  );
};
