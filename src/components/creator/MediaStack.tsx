import { ThemeProvider } from '@emotion/react';
import { Box, IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import { PostThumbnail } from '../../elements/PostThumbnail';
import { Close, Eye, Lock, Plus } from '../../elements/icons';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

import { useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder
} from 'react-beautiful-dnd';

interface Props {
  imageUrls: string[];
  firstImageFree?: boolean;
  allImagesFree?: boolean;
  onAddClick?: () => void;
  onDeleteClick: (index: number) => void;
  onReorder: (imageUrls: string[]) => void;
  allowAdd?: boolean;
}

function reorder<Type>(
  list: Type[],
  startIndex: number,
  endIndex: number
): Type[] {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
}

export const MediaStack = ({
  onAddClick,
  imageUrls,
  onDeleteClick,
  firstImageFree,
  allImagesFree,
  onReorder,
  allowAdd = true
}: Props) => {
  const [imageList, setImageList] = useState(imageUrls);

  const mediaReorder: OnDragEndResponder = async (result) => {
    if (!result.destination) return;
    const newItems = reorder(
      imageList,
      result.source.index,
      result.destination.index
    );
    setImageList(newItems);
    onReorder(newItems);
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack
        data-testid={`media-stack-1-ds`}
        width={'100%'}
        flexDirection={'row'}
        alignItems={'start'}
        justifyContent={'flex-start'}
        p={'20px 0 0 0'}
        position={'relative'}
        gap={'1.25rem'}
      >
        {/* Select Image Box */}

        <DragDropContext
          data-testid={`media-stack-drag-drop-context-ds`}
          onDragEnd={mediaReorder}
        >
          <Droppable
            data-testid={`media-stack-droppable-ds`}
            direction="horizontal"
            droppableId="custom-section-link-dnd"
          >
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <Box display={'flex'} flexWrap={'wrap'} gap={2}>
                  {allowAdd && onAddClick && (
                    <Draggable
                      data-testid={`media-stack-draggable-ds`}
                      key={'uploader'}
                      draggableId={'uploader'}
                      index={-1}
                      isDragDisabled={true}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Stack
                            data-testid={`media-stack-upload-c`}
                            bgcolor={colors.lightgray[200]}
                            width={{ xs: '80px', md: '6.25rem' }}
                            height={{ xs: '80px', md: '6.25rem' }}
                            flexShrink={0}
                            borderRadius={'0.25rem'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            onClick={onAddClick}
                          >
                            <IconButton sx={{ color: colors.black }}>
                              <Plus />
                            </IconButton>
                          </Stack>
                        </div>
                      )}
                    </Draggable>
                  )}
                  {imageList.map((url: string, index: number) => (
                    <Draggable
                      data-testid={`media-stack-draggable-${index}-ds`}
                      key={index}
                      draggableId={index.toString()}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Box
                            sx={{
                              width: { xs: '80px', md: '6.25rem' },
                              height: { xs: '80px', md: '6.25rem' },
                              position: 'relative'
                            }}
                          >
                            <PostThumbnail
                              sx={{
                                borderRadius: '4px',
                                minHeight: { xs: '80px', md: '6.25rem' },
                                maxHeight: { xs: '80px', md: '6.25rem' }
                              }}
                              src={url}
                              alt="post media"
                            />
                            {/* Over Action Button */}
                            <Box
                              sx={{
                                position: 'absolute',
                                bottom: '0',
                                right: '0',
                                background: 'rgba(0, 0, 0, 0.50)',
                                width: '24px',
                                height: '24px',
                                borderRadius: '4px 0',
                                display: 'grid',
                                placeItems: 'center',
                                color: colors.white,
                                cursor: 'pointer'
                              }}
                            >
                              {allImagesFree ||
                              (firstImageFree && index === 0) ? (
                                <Eye />
                              ) : (
                                <Lock />
                              )}
                            </Box>
                            {/* Close Button */}
                            <Box
                              data-testid={`media-stack-box-on-delete-click-ds`}
                              sx={{
                                width: '24px',
                                height: '24px',
                                background: colors.black,
                                borderRadius: '50%',
                                display: 'grid',
                                placeItems: 'center',
                                position: 'absolute',
                                padding: '2px',
                                top: '-15px',
                                right: '-10px',
                                cursor: 'pointer',
                                color: colors.white
                              }}
                              onClick={() => onDeleteClick(index)}
                            >
                              <Close />
                            </Box>
                          </Box>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Box>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Stack>
    </ThemeProvider>
  );
};
