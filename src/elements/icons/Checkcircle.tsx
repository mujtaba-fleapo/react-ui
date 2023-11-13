import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Checkcircle = ({ color = 'currentColor', size }: IconProps) => {
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
          d="M3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.25 16.5563 16.5563 20.25 12 20.25C7.44365 20.25 3.75 16.5563 3.75 12ZM12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM16.6427 10.2927C16.9424 10.0067 16.9536 9.532 16.6677 9.2323C16.3817 8.93259 15.907 8.92142 15.6073 9.20734L10.6223 13.963L8.39317 11.8328C8.0937 11.5466 7.61895 11.5574 7.33278 11.8568C7.0466 12.1563 7.05738 12.631 7.35684 12.9172L10.1037 15.5422C10.3934 15.8191 10.8496 15.8193 11.1396 15.5427L16.6427 10.2927Z"
          fill={fill}
        />
      </svg>
    </SvgIcon>
  );
};
