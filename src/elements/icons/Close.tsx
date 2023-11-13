import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Close = ({ color = 'currentColor', size }: IconProps) => {
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
          d="M19.2807 18.2193C19.3504 18.289 19.4056 18.3717 19.4433 18.4628C19.4811 18.5538 19.5005 18.6514 19.5005 18.7499C19.5005 18.8485 19.4811 18.9461 19.4433 19.0371C19.4056 19.1281 19.3504 19.2109 19.2807 19.2806C19.211 19.3502 19.1283 19.4055 19.0372 19.4432C18.9462 19.4809 18.8486 19.5003 18.7501 19.5003C18.6515 19.5003 18.5539 19.4809 18.4629 19.4432C18.3718 19.4055 18.2891 19.3502 18.2194 19.2806L12.0001 13.0602L5.78068 19.2806C5.63995 19.4213 5.44907 19.5003 5.25005 19.5003C5.05103 19.5003 4.86016 19.4213 4.71943 19.2806C4.5787 19.1398 4.49963 18.949 4.49963 18.7499C4.49963 18.5509 4.5787 18.36 4.71943 18.2193L10.9397 11.9999L4.71943 5.78055C4.5787 5.63982 4.49963 5.44895 4.49963 5.24993C4.49963 5.05091 4.5787 4.86003 4.71943 4.7193C4.86016 4.57857 5.05103 4.49951 5.25005 4.49951C5.44907 4.49951 5.63995 4.57857 5.78068 4.7193L12.0001 10.9396L18.2194 4.7193C18.3602 4.57857 18.551 4.49951 18.7501 4.49951C18.9491 4.49951 19.1399 4.57857 19.2807 4.7193C19.4214 4.86003 19.5005 5.05091 19.5005 5.24993C19.5005 5.44895 19.4214 5.63982 19.2807 5.78055L13.0604 11.9999L19.2807 18.2193Z"
          fill={fill}
        />
      </svg>
    </SvgIcon>
  );
};