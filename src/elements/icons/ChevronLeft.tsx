import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const ChevronLeft = ({ color = 'currentColor', size }: IconProps) => {
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
        <path
          d="M15.5307 18.9694C15.6004 19.0391 15.6557 19.1218 15.6934 19.2129C15.7311 19.3039 15.7505 19.4015 15.7505 19.5001C15.7505 19.5986 15.7311 19.6962 15.6934 19.7872C15.6557 19.8783 15.6004 19.961 15.5307 20.0307C15.461 20.1004 15.3783 20.1556 15.2873 20.1933C15.1962 20.2311 15.0986 20.2505 15.0001 20.2505C14.9016 20.2505 14.804 20.2311 14.7129 20.1933C14.6219 20.1556 14.5392 20.1004 14.4695 20.0307L6.96948 12.5307C6.89974 12.461 6.84443 12.3783 6.80668 12.2873C6.76894 12.1962 6.74951 12.0986 6.74951 12.0001C6.74951 11.9015 6.76894 11.8039 6.80668 11.7128C6.84443 11.6218 6.89974 11.5391 6.96948 11.4694L14.4695 3.96943C14.6102 3.8287 14.8011 3.74963 15.0001 3.74963C15.1991 3.74963 15.39 3.8287 15.5307 3.96943C15.6715 4.11016 15.7505 4.30103 15.7505 4.50005C15.7505 4.69907 15.6715 4.88995 15.5307 5.03068L8.56041 12.0001L15.5307 18.9694Z"
          fill={fill}
        />
      </svg>
    </SvgIcon>
  );
};
