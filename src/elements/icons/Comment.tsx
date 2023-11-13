import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Comment = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_898_42393)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.3751 3.75C10.2865 3.75 8.28345 4.57968 6.8066 6.05653C5.32975 7.53338 4.50006 9.53642 4.50006 11.625V19.5H12.3751C13.4092 19.5 14.4333 19.2963 15.3887 18.9006C16.3441 18.5048 17.2123 17.9247 17.9435 17.1935C18.6748 16.4622 19.2549 15.5941 19.6506 14.6386C20.0464 13.6832 20.2501 12.6592 20.2501 11.625C20.2501 10.5908 20.0464 9.56681 19.6506 8.61137C19.2549 7.65593 18.6748 6.7878 17.9435 6.05653C17.2123 5.32527 16.3441 4.7452 15.3887 4.34945C14.4333 3.95369 13.4092 3.75 12.3751 3.75ZM5.74594 4.99587C7.50409 3.23772 9.88866 2.25 12.3751 2.25C13.6062 2.25 14.8253 2.49249 15.9627 2.96363C17.1001 3.43477 18.1336 4.12532 19.0042 4.99587C19.8747 5.86642 20.5653 6.89991 21.0364 8.03734C21.5076 9.17477 21.7501 10.3939 21.7501 11.625C21.7501 12.8561 21.5076 14.0752 21.0364 15.2127C20.5653 16.3501 19.8747 17.3836 19.0042 18.2541C18.1336 19.1247 17.1001 19.8152 15.9627 20.2864C14.8253 20.7575 13.6062 21 12.3751 21H4.47612C4.28276 21.0018 4.09095 20.9652 3.91179 20.8924C3.73084 20.8189 3.56647 20.7098 3.42836 20.5717C3.29025 20.4336 3.1812 20.2692 3.10765 20.0883C3.03484 19.9091 2.99828 19.7174 3.00006 19.524V11.625C3.00006 9.1386 3.98778 6.75403 5.74594 4.99587Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_898_42393">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};