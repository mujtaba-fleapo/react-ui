import { ThemeProvider } from '@emotion/react';
import { List, ListItem } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Typography } from '../../elements/Typography';
import { ChevronRight } from '../../elements/icons';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface Props {
  options: { title: string; key: string }[];
  onClick?: (key: string) => unknown;
}
export const DesktopLinkList = (props: Props) => {
  const { options, onClick } = props;

  return (
    <ThemeProvider theme={theme}>
      <List
        data-testid={`desktop-link-list-ds`}
        sx={{ width: '100%', p: 0, m: 0 }}
      >
        {options?.map(({ title, key }) => (
          <ListItem
            data-testid={`desktop-link-list-item-${key}-ds`}
            sx={{
              borderBottom: `1px solid ${colors.lightgray[400]}`,
              cursor: 'pointer',
              px: 0,
              py: '14px'
            }}
            onClick={() => onClick?.(key)}
            key={key}
          >
            <Stack
              data-testid={`desktop-link-list-stack-ds`}
              sx={{ width: '100%' }}
              spacing={1}
              direction="row"
              justifyContent={'space-between'}
              alignItems="center"
            >
              <Typography className="interSemibold16">{title}</Typography>
              <ChevronRight color={'#000'} />
            </Stack>
          </ListItem>
        ))}
      </List>
    </ThemeProvider>
  );
};
