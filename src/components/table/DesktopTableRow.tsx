import { ThemeProvider } from '@emotion/react';
import { Box, IconButton, TableCell, TableRow } from '@mui/material';
import { Avatar } from '../../elements/Avatar';
import { Horizontaldots } from '../../elements/icons';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface Props {
  data: any;
  index: number;
  handleClick: (e: any) => void;
  onRowItemClick?: (index: number) => unknown;
  menuOpen: boolean;
  hasActions?: boolean;
  circularImages?: boolean;
  imageKey?: string;
  headers: { icon: React.ReactNode | string; title: string; key: string }[];
}

export const DesktopTableRow = ({
  data,
  index,
  handleClick,
  onRowItemClick,
  menuOpen,
  hasActions,
  circularImages,
  imageKey,
  headers
}: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <TableRow
        onClick={() => {
          onRowItemClick?.(index);
        }}
        data-testid={`desktop-table-row-${index}-ds`}
        key={index}
        className="interRegular14"
        sx={{
          '&:hover': {
            backgroundColor: colors.lightgray[200],
            cursor: 'pointer'
          }
        }}
      >
        {headers.map((item, index) => {
          return (
            <TableCell
              data-testid={`desktop-table-cell-${index}-ds`}
              align="left"
              key={`table-cell${index}`}
            >
              {index === 0 ? (
                <Box display="flex" alignItems="center" gap={1}>
                  {imageKey &&
                    (circularImages ? (
                      <Avatar src={data[imageKey]} />
                    ) : (
                      // eslint-disable-next-line jsx-a11y/alt-text
                      <img
                        src={data[imageKey]}
                        style={{
                          width: '40px',
                          height: '40px',
                          objectFit: 'cover',
                          borderRadius: '3px'
                        }}
                      />
                    ))}
                  {data[item.key] && (
                    <Box
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        width: '200px'
                      }}
                    >
                      {data[item.key]}
                    </Box>
                  )}
                </Box>
              ) : (
                data[item.key]
              )}
            </TableCell>
          );
        })}
        {hasActions && (
          <TableCell
            data-testid={`desktop-table-cell-action-ds`}
            align="left"
            className="action-col"
          >
            <IconButton
              data-testid={`action-col-button-${index}-ds`}
              aria-controls={menuOpen ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={menuOpen ? 'true' : undefined}
              onClick={handleClick}
            >
              <Horizontaldots />
            </IconButton>
          </TableCell>
        )}
      </TableRow>
    </ThemeProvider>
  );
};
