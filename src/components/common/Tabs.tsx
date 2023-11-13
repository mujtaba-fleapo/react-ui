import { ThemeProvider } from '@emotion/react';
import { List, ListItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { theme } from '../../theme';
import { DesktopTabText } from './DesktopTabText';

interface Props {
  options: { title: string; id: string }[];
  onClick: (key: string) => unknown;
  active?: string;
}
export const Tabs = (props: Props) => {
  const { options, onClick } = props;

  const [index, setIndex] = useState<number | null>(null);

  const onItemClick = (text: string, i: number) => {
    setIndex(i);
  };

  useEffect(() => {
    if (props.active) {
      const index = options?.findIndex((item) => item.id === props.active);
      setIndex(index);
    }
  }, [props.active]);

  return (
    <ThemeProvider theme={theme}>
      <List
        data-testid={`tabs-list-ds`}
        sx={{
          display: 'inline-flex',
          alignItems: 'flex-start',
          gap: '20px'
        }}
      >
        {options?.map((item, i) => (
          <ListItem
            data-testid={`tabs-list-item-${item.title
              .replace(/\s+/g, '-')
              .toLowerCase()}-ds`}
            key={i}
            sx={{
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              whiteSpace: 'nowrap',
              gap: '4px',
              cursor: 'pointer'
            }}
          >
            <DesktopTabText
              data-testid={`tabs-desktop-tab-text-${i}-ds`}
              active={i === index}
              text={item.title}
              onClick={() => {
                onClick?.(item.id);
                onItemClick(item.id, i);
              }}
            />
          </ListItem>
        ))}
      </List>
    </ThemeProvider>
  );
};
