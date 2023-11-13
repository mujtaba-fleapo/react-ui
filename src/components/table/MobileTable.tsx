import { Box } from '@mui/material';
import List from '@mui/material/List';
import { useState } from 'react';
import { ContextMenu } from '../navigation/ContextMenu';
import { MobileTableRow } from './MobileTableRow';

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
  onMenuItemClick?: (key: string, index: number) => void;
  showContextMenu?: boolean;
  lastItemIsAlert?: boolean;
}

export const MobileTable = ({
  headers,
  hasActions,
  data,
  circularImages,
  showContextMenu = true,
  imageKey,
  options,
  onMenuItemClick,
  lastItemIsAlert
}: Props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [index, setIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClick = (event: any, index: number) => {
    setAnchorEl(event.currentTarget);
    setIndex(index);
  };
  return (
    <>
      <List data-testid={`mobile-table-posts-list-ds`} sx={{ width: '100%' }}>
        {data.map((item, index) => {
          return (
            <Box
              onClick={() =>
                !showContextMenu ? onMenuItemClick?.('', index) : null
              }
            >
              <MobileTableRow
                key={`row-${index}`}
                data={item}
                handleClick={(e) => handleClick(e, index)}
                hasActions={hasActions}
                showThreeDots={showContextMenu}
                circularImages={circularImages}
                imageKey={imageKey}
                headers={headers}
              />
            </Box>
          );
        })}
      </List>

      <ContextMenu
        options={options ?? []}
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        onClick={(e: string) => onMenuItemClick?.(e, index)}
        lastItemIsAlert
      />
    </>
  );
};
