import { ThemeProvider } from '@emotion/react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { useState } from 'react';
import { theme } from '../../theme';
import { ContextMenu } from '../navigation/ContextMenu';
import { DesktopTableHeader } from './DesktopTableHeader';
import { DesktopTableRow } from './DesktopTableRow';

export type Direction = 'asc' | 'desc';

interface Props {
  headers: { icon: React.ReactNode | string; title: string; key: string }[];
  hasActions?: boolean;
  data: any[];
  circularImages?: boolean;
  imageKey?: string;
  options?: {
    label: string;
    key: string;
  }[];
  lastItemIsAlert?: boolean;
  onMenuItemClick?: (key: string, index: number) => void;
  onSort?: (key: string, direction: Direction) => void;
  sortedColumn?: string;
  sortableHeaders?: string[];
  onRowClick?: (index: number) => void;
}

export const DesktopTable = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [index, setIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClick = (event: any, index: number) => {
    setAnchorEl(event.currentTarget);
    setIndex(index);
  };

  return (
    <ThemeProvider theme={theme}>
      <TableContainer data-testid={`desktop-table-container-ds`}>
        <Table data-testid={`desktop-table-root-ds`} className="desktop-table">
          <DesktopTableHeader
            data-testid={`desktop-table-header-ds`}
            headers={props.headers}
            hasActions={props.hasActions}
            onSort={props.onSort}
            sortedColumn={props.sortedColumn}
            sortableHeaders={props.sortableHeaders}
          />
          <TableBody>
            {props.data.map((row: any, index: number) => {
              return (
                <>
                  {
                    <DesktopTableRow
                      onRowItemClick={props.onRowClick}
                      data-testid={`desktop-table-row-${index}-ds`}
                      key={`row-${index}`}
                      index={index}
                      data={row}
                      handleClick={(e) => handleClick(e, index)}
                      menuOpen={open}
                      hasActions={props.hasActions}
                      circularImages={props.circularImages}
                      imageKey={props.imageKey}
                      headers={props.headers}
                    />
                  }
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <ContextMenu
        data-testid={`desktop-table-context-menu-ds`}
        options={props.options ?? []}
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        onClick={(e: string) => props.onMenuItemClick?.(e, index)}
        lastItemIsAlert={props.lastItemIsAlert === false ? false : true}
      />
    </ThemeProvider>
  );
};
