import { styled } from '@mui/material/styles';
import { useRef } from 'react';

const DropZone = styled('input')({
  padding: 0,
  margin: 0,
  width: '100%',
  height: '100%',
  opacity: 0,
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 5
});

export interface UploadedFileType {
  type: string;
  mime_type: string;
  size: number;
  name: string;
  File: File;
  allowed: boolean;
  comments: string;
}

interface Props {
  accept?: string;
  multiple?: boolean;
  onSubmit: (files: UploadedFileType[]) => unknown;
}

export const FileUploader = ({ accept, multiple = false, onSubmit }: Props) => {
  const _maxSizeMB = 250;
  const maxAllowedSize = _maxSizeMB * 1024 * 1024;
  const _acceptedFileTypes = 'image/*,video/*,' + accept;

  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (files: FileList | null) => {
    try {
      if (!files || (files && !files.length)) return;

      const processedFiles: UploadedFileType[] = [];
      for (const file of files) {
        const fileType = file.type.split('/')?.[1];
        if (file.size > maxAllowedSize) {
          processedFiles.push({
            type: file.type.split('/')[0],
            mime_type: file.type,
            size: file.size,
            name: file.name,
            File: file,
            allowed: false,
            comments: 'File size is too large'
          });
        } else if (
          file.type.includes('image') ||
          file.type.includes('video') ||
          _acceptedFileTypes.includes(fileType)
        ) {
          processedFiles.push({
            type: file.type.split('/')[0],
            mime_type: file.type,
            size: file.size,
            name: file.name,
            File: file,
            allowed: true,
            comments: ''
          });
        } else {
          processedFiles.push({
            type: file.type.split('/')[0],
            mime_type: file.type,
            size: file.size,
            name: file.name,
            File: file,
            allowed: false,
            comments: 'File type is not allowed'
          });
        }
      }
      onSubmit(processedFiles);
    } catch (error) {
      console.log(error);
    }
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <DropZone
      ref={inputRef}
      id="fileuploader-input"
      type="file"
      name="file"
      accept={_acceptedFileTypes}
      multiple={multiple}
      onChange={(e) => handleSubmit(e.target.files)}
    />
  );
};
