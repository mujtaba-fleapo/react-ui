import { ThemeProvider } from '@emotion/react';
import { Table, TableBody } from '@mui/material';
import { theme } from '../../theme';
import { BasicTableRow } from './BasicTableRow';

interface Props {
  data: {
    label: string;
    value: string;
  }[];
}

export const BasicTable = ({ data }: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Table
          data-testid={`basic-table-ds`}
          aria-label="simple table"
          sx={{ width: '100%' }}
        >
          <TableBody data-testid={`basic-table-body-ds`}>
            {data.map((item, index) => {
              return (
                <BasicTableRow
                  data-testid={`basic-table-row-${index}-ds`}
                  label={item.label}
                  value={item.value}
                />
              );
            })}
          </TableBody>
        </Table>
      </ThemeProvider>
    </>
  );
};
