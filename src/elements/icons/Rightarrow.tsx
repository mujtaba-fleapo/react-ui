import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Rightarrow = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_898_42529)">
          <path
            d="M12.9697 5.78033C12.6768 5.48744 12.6768 5.01256 12.9697 4.71967C13.2626 4.42678 13.7374 4.42678 14.0303 4.71967L20.7803 11.4697C20.9268 11.6161 21 11.8081 21 12C21 12.1017 20.9798 12.1987 20.9431 12.2871C20.9073 12.3735 20.8547 12.4547 20.7852 12.5254"
            fill={fill}
          />
          <path
            d="M20.7799 12.5308L14.0303 19.2803C13.7374 19.5732 13.2626 19.5732 12.9697 19.2803C12.6768 18.9874 12.6768 18.5126 12.9697 18.2197L18.4393 12.75H3.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25H18.4393L12.9697 5.78033"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_898_42529">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
