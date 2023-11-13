import { ThemeProvider } from '@emotion/react';
import { Box, TableCell, TableSortLabel } from '@mui/material';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { Typography } from '../../elements/Typography';
import { theme } from '../../theme';

export type Direction = 'asc' | 'desc';

export interface Header {
  icon: React.ReactNode | string | any;
  title: string;
  key: string;
}

interface TableProps {
  headers: Header[];
  sortableHeaders?: string[];
  hasActions?: boolean;
  onSort?: (key: string, direction: Direction) => void;
  sortedColumn?: string;
}

interface HeadCellProps {
  index: number;
  item: Header;
  active: boolean;
  onSort?: (key: string, direction: Direction) => void;
  sortable?: boolean;
}

const HeadCell = ({ index, item, active, onSort, sortable }: HeadCellProps) => {
  const [direction, setDirection] = React.useState<Direction>('asc');
  return (
    <TableCell
      data-testid={`table-header-row-${
        item.title ? item.title.replace(/\s+/g, '-').toLowerCase() : index
      }-ds`}
      align="left"
      key={index}
    >
      {sortable ? (
        <TableSortLabel
          data-testid={`desktop-table-header-${item.title
            .replace(/\s+/g, '-')
            .toLowerCase()}-ds`}
          active={active}
          direction={direction}
          onClick={() => {
            setDirection(direction === 'asc' ? 'desc' : 'asc');
            onSort?.(item.key, direction);
          }}
        >
          <Box className="heading-icon">
            {item.icon}{' '}
            <Typography className="interSemibold14"> {item.title} </Typography>
          </Box>
        </TableSortLabel>
      ) : (
        <>
          <Box className="heading-icon">
            {item.icon}{' '}
            <Typography className="interSemibold14"> {item.title} </Typography>
          </Box>
        </>
      )}
    </TableCell>
  );
};

export const DesktopTableHeader = (props: TableProps) => {
  const { headers, hasActions, onSort, sortedColumn } = props;
  return (
    <ThemeProvider theme={theme}>
      <TableHead>
        <TableRow
          data-testid={`desktop-table-header-row-ds`}
          className="table-heading"
        >
          {headers.map((item, index) => {
            return (
              <HeadCell
                data-testid={`desktop-table-head-cell-${index}-ds`}
                key={index}
                index={index}
                active={sortedColumn === item.key}
                item={item}
                onSort={onSort}
                sortable={props.sortableHeaders?.includes(item.key)}
              />
            );
          })}
          {hasActions && <TableCell align="left"></TableCell>}
        </TableRow>
      </TableHead>
    </ThemeProvider>
  );
};
