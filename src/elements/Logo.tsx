interface Props {
  size?: number;
}

export const Logo = (props: Props) => {
  return (
    <img
      style={{ width: `${props.size || 200}px` }}
      src="https://fanfix-icons.pages.dev/logo.png"
      alt="FanFix"
    />
  );
};
