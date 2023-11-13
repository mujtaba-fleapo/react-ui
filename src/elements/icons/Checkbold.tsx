import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Checkbold = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_898_42513)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.0607 5.68934C22.6464 6.27513 22.6464 7.22487 22.0607 7.81066L10.0607 19.8107C9.47487 20.3964 8.52513 20.3964 7.93934 19.8107L2.68934 14.5607C2.10355 13.9749 2.10355 13.0251 2.68934 12.4393C3.27513 11.8536 4.22487 11.8536 4.81066 12.4393L9 16.6287L19.9393 5.68934C20.5251 5.10355 21.4749 5.10355 22.0607 5.68934Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_898_42513">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
