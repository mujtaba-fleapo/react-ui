import MuiAvatar from '@mui/material/Avatar';

interface Props {
  alt?: string;
  src?: string | 'fanfix';
  size?: any | number;
  onClick?: () => void;
}

export const Avatar = (props: Props) => {
  const src =
    props.src === 'fanfix'
      ? 'https://fanfix-icons.pages.dev/FanfixAvatar.png'
      : props.src
      ? props.src
      : 'https://fanfix-icons.pages.dev/DefaultAvatar.svg';

  return (
    <MuiAvatar
      data-testid={`avatar-ds`}
      alt={props.alt || 'Avatar'}
      src={src}
      sx={{
        width: props.size || 40,
        height: props.size || 40
      }}
      onClick={() => props.onClick?.()}
    />
  );
};
