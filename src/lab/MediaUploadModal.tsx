import { Stack } from '@mui/material';
// filepond
import FilePondPluginImageEditor from '@pqina/filepond-plugin-image-editor';
// pintura
import {
  createDefaultImageOrienter,
  createDefaultImageReader,
  createDefaultImageWriter,
  createDefaultShapePreprocessor,
  legacyDataToImageState,
  locale_en_gb,
  markup_editor_defaults,
  markup_editor_locale_en_gb,
  // editor
  openEditor,
  plugin_annotate,
  plugin_annotate_locale_en_gb,
  plugin_crop,
  plugin_crop_locale_en_gb,
  plugin_filter,
  plugin_filter_defaults,
  plugin_filter_locale_en_gb,
  plugin_finetune,
  plugin_finetune_defaults,
  plugin_finetune_locale_en_gb,
  processImage,

  // plugins
  setPlugins
} from '@pqina/pintura';
import { FilePondErrorDescription } from 'filepond';
import {
  default as FilePondPluginFileSize,
  default as FilePondPluginFileValidateSize
} from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { useEffect, useRef, useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import { PillButton } from '../elements/PillButton';
import { Typography } from '../elements/Typography';
import '../styles/MediaUploadModal.scss';
import { Modal } from './Modal';

registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginImageEditor,
  FilePondPluginFileValidateSize,
  FilePondPluginImagePreview,
  FilePondPluginFileSize
);

// pintura
setPlugins(plugin_crop, plugin_finetune, plugin_filter, plugin_annotate);

export interface Asset {
  originalURL: string;
  resizedURL: string;
  blurredURL: string;
  name: string;
  mimeType: string;
  fileType: string;
  mediaType: string;
  size: number;
  playbackId: string;
  assetId: string;
}

interface MediaUploadModalProps {
  /**
   * Title of the modal
   * @type string
   * @default Add Media
   *
   */
  title?: string;
  /**
   * Whether the modal is open or not
   * @type boolean
   * @default false
   * @required
   *
   */
  open: boolean;
  /**
   * The url to which the file is to be uploaded
   * @type string
   * @required
   * @note If the API requires authorization headers, plese use the additionalHeaders props to pass the header data. Else the upload won't work.
   */
  uploadDestinationUrl: string;
  /**
   * The auth headers to be sent with the post request like auth tokens
   * @type object
   * @required
   * @example
   * ```js
   *  {
   *    Authorization: 'Bearer token'
   *   }
   * ```
   */
  additionalHeaders?: any;
  /**
   * Whether to allow multiple file upload or not
   * @type boolean
   * @default false
   */
  multiple?: boolean;

  /**
   * Accepted file types
   * @default image
   * @options image | video | both
   * @type "image" | "video" | "both"
   */
  acceptedFileTypes?: 'image' | 'video' | 'both';
  /**
   * Whether to allow image editor or not
   * @type boolean
   * @default false
   */
  allowImageEditor?: boolean;
  /**
   * Whether to allow image preview or not after selection
   * @type boolean
   * @default false
   */
  allowImagePreview?: boolean;
  /**
   * Name of the key to be used for uploading the file, sent in the body of the post request
   * @type string
   * @default file
   */
  uploadObjectKeyName?: string;
  /**
   * Layout of the image preview
   * @default compact
   * @options compact | circle
   * @type "compact" | "circle"
   *
   */
  imageLayout?: 'compact' | 'circle';
  /**
   * Type of media that is being uploaded
   * @default PostMedia
   * @options ProfileMedia | PostMedia | MessageMedia
   * @type "ProfileMedia"|"PostMedia"|"MessageMedia"
   * @example "PostMedia"
   *
   * @description
   * Use PostMedia for uploading media for posts
   * Use ProfileMedia for uploading media for profile
   * Use MessageMedia for uploading media for messages
   *
   * note: when using this for profile picture upload, remeber to set the imageLayout to circle
   */
  mediaType?: 'ProfileMedia' | 'PostMedia' | 'MessageMedia';
  /**
   * Maximum file size allowed
   * @default 250MB
   * @type string
   * @example "250MB"
   */
  maxFileSize?: string;
  /**
   * Maximum number of files allowed to be uploaded parallely
   * @default 1
   * @type number
   */
  maxParallelUploads?: number;
  /**
   * Maximum number of files allowed to be selected at once. To be used with multiple set to true
   * @default 1
   * @type number
   * @description
   * note: this is only applicable when multiple is set to true else it will be ignored
   *
   */
  maxFiles?: number;

  /**
   * Function to close the modal
   * @type function
   * @param error <optional> {FilePondErrorDescription} - If any error occurs, would send the error object else undefined
   * @required
   */
  onClose: (error?: FilePondErrorDescription) => void;
  /**
   * Callback function that returns after the file is  uploaded. Called for every upload that gets completed.
   * @param {Asset} asset - The asset data for the uploaded media
   * @type Asset
   * @example (asset) => console.log(asset) {originalURL: 'https://storage.googleapis.com/fleapo.appspot.com/...',...}
   * @required
   * @description
   * note: if multiple is set to true, the call back will be fired for every upload that gets completed
   *
   */
  onComplete: (asset?: Asset) => void;
}

/**
 * This is the MediaUploadModal which uses filePond to upload the files/assets to the server. \
 * - The ```uploadDestinationUrl``` prop must be provided with a url that this component would be uploading the selected media to. \
 * - If the url requires authentication, you can pass such auth headers with other more general header props into the ```additionalHeaders``` property. \
 * - When using this modal to upload multiple images, make sure to provide the max number of files that can be uploaded through the ```maxFiles``` property. \
 * - You can modify the ```maxParallelUploads``` prop to change the number of files that would be uploaded at once to the provided ```uploadDestinationUrl```
 */
export const MediaUploadModal = ({
  title = 'Add Media',
  open,
  multiple = false,
  acceptedFileTypes = 'image',
  allowImageEditor = false,
  uploadObjectKeyName = 'file',
  imageLayout = 'compact',
  mediaType = 'PostMedia',
  maxFileSize = '250MB',
  allowImagePreview = false,
  maxParallelUploads = 1,
  maxFiles = 1,
  uploadDestinationUrl,
  additionalHeaders,
  onClose,
  onComplete
}: MediaUploadModalProps) => {
  const filePondRef = useRef<FilePond>(null);
  const [files, setFiles] = useState<any[]>([]);
  const [fileUrls, setFileUrls] = useState<any[]>([]);
  const [idleFilesPresent, setIdleFilesPresent] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const onUploadClick = () => {
    if (idleFilesPresent && !isUploading) {
      setIsUploading(true);
      return filePondRef.current?.processFiles();
    } else onClose();
  };

  useEffect(() => {
    if (!uploadDestinationUrl) {
      console.error('File upload destination url was not provided');
      return onClose({
        body: 'File upload destination url was not provided',
        code: 0,
        type: 'developer-error'
      });
    }
    if (open) {
      setFiles([]);
      setFileUrls([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, uploadDestinationUrl]);

  return (
    <Modal
      size="medium"
      open={open}
      onClose={onClose}
      closeOnBackdropClick={false}
    >
      <Stack
        data-testid={`media-upload-modal-stack-ds`}
        display={'flex'}
        flexDirection={'column'}
        flex={1}
        overflow={'scroll'}
      >
        <Stack data-testid={`media-upload-modal-title-ds`}>
          <Typography className="interMedium24">{title}</Typography>
        </Stack>
        <Stack data-testid={`media-upload-modal-description-ds`}>
          <Typography className="interRegular14">
            {`You can upload ${
              multiple ? 'multiple files' : 'single file'
            } at once`}
          </Typography>
          <Typography className="interRegular14">
            {`Maximum upload file size is ${maxFileSize}`}
          </Typography>
        </Stack>

        <Stack data-testid={`media-upload-modal-filepond-ds`}>
          <FilePond
            onerror={(error) => {
              console.error('error', error);
              onClose(error);
            }}
            ref={filePondRef}
            credits={false}
            allowImageEditor={allowImageEditor}
            files={files}
            instantUpload={false}
            onupdatefiles={setFiles}
            maxParallelUploads={maxParallelUploads}
            maxFiles={multiple ? maxFiles : 1}
            allowFileSizeValidation={true}
            maxFileSize={maxFileSize}
            labelIdle={`Drag & Drop your file${
              multiple ? 's' : ''
            } or <span class="filepond--label-action"> Browse </span>`}
            acceptedFileTypes={['image/*', 'video/*']}
            allowMultiple={multiple}
            imagePreviewHeight={200}
            allowRevert={false}
            onaddfile={(error, file) => {
              setIdleFilesPresent(true);
            }}
            styleImageEditorButtonEditItemPosition="top"
            allowImagePreview={allowImagePreview}
            server={{
              process: {
                url: uploadDestinationUrl,
                ondata: (formData: any) => {
                  formData.append('mediaType', mediaType);
                  return formData;
                },
                headers: additionalHeaders ?? {}
              }
            }}
            name={uploadObjectKeyName ?? 'file'}
            onprocessfilestart={(file) => setIsUploading(true)}
            onprocessfileabort={(file) => {
              if (
                filePondRef.current
                  ?.getFiles()
                  .find((file) => [3, 9].includes(file.status))
              )
                setIsUploading(true);
              else {
                setIsUploading(false);
                files.length === fileUrls.length && setIdleFilesPresent(false);
              }
            }}
            onpreparefile={() => setIsUploading(true)}
            onprocessfiles={() => onComplete()}
            onprocessfile={(error, file) => {
              setFileUrls((prev) => [
                ...prev,
                {
                  ...file,
                  source: JSON.parse(file.serverId)?.data,
                  options: { type: 'local' }
                }
              ]);
              // onComplete(JSON.parse(file.serverId));

              if (
                filePondRef.current
                  ?.getFiles()
                  .find((file) => [3, 9].includes(file.status))
              )
                setIdleFilesPresent(true);

              if (
                filePondRef.current
                  ?.getFiles()
                  .find((file) => [3, 9].includes(file.status))
              )
                setIsUploading(true);
              else {
                setIsUploading(false);
                setIdleFilesPresent(false);
              }
            }}
            stylePanelLayout={imageLayout}
            imageEditor={{
              legacyDataToImageState: legacyDataToImageState,
              createEditor: openEditor,
              imageReader: [createDefaultImageReader],
              imageWriter: [createDefaultImageWriter],
              imageProcessor: processImage,
              editorOptions: {
                imageOrienter: createDefaultImageOrienter(),
                shapePreprocessor: createDefaultShapePreprocessor(),
                ...plugin_finetune_defaults,
                ...plugin_filter_defaults,
                ...markup_editor_defaults,
                locale: {
                  ...locale_en_gb,
                  ...plugin_crop_locale_en_gb,
                  ...plugin_finetune_locale_en_gb,
                  ...plugin_filter_locale_en_gb,
                  ...plugin_annotate_locale_en_gb,
                  ...markup_editor_locale_en_gb
                }
              }
            }}
          />
        </Stack>
        <Stack>
          <PillButton
            text={
              idleFilesPresent
                ? isUploading
                  ? 'Uploading...'
                  : 'Upload'
                : 'Done'
            }
            type="button"
            loading={isUploading}
            disabled={files.length === 0 && files.length !== fileUrls.length}
            onClick={onUploadClick}
          />
        </Stack>
      </Stack>
    </Modal>
  );
};
