import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const LeftArrow = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_234_4998)">
          <path
            d="M11.0303 5.78033C11.3232 5.48744 11.3232 5.01256 11.0303 4.71967C10.7374 4.42678 10.2626 4.42678 9.96967 4.71967L3.21967 11.4697C3.07322 11.6161 3 11.8081 3 12C3 12.1017 3.02024 12.1987 3.05691 12.2871C3.09268 12.3735 3.14531 12.4547 3.2148 12.5254"
            fill={fill}
          />
          <path
            d="M3.22014 12.5308L9.96967 19.2803C10.2626 19.5732 10.7374 19.5732 11.0303 19.2803C11.3232 18.9874 11.3232 18.5126 11.0303 18.2197L5.56066 12.75H20.25C20.6642 12.75 21 12.4142 21 12C21 11.5858 20.6642 11.25 20.25 11.25H5.56066L11.0303 5.78033"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_234_4998">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
