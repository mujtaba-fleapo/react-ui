import { Box, Slider } from '@mui/material';
import { useState } from 'react';
import Cropper, { Area } from 'react-easy-crop';
import { PillButton } from '../elements/PillButton';
import { Typography } from '../elements/Typography';
import { Rotate } from '../elements/icons';
import { Modal } from '../lab/Modal';

interface Props {
  filename?: string;
  image?: string;
}

export const ImageCropper = (props: Props) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedArea, setCroppedArea] = useState<Area | null>(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const handleRotation = () => {
    if (rotation === 270) setRotation(0);
    else setRotation(rotation + 90);
  };

  return (
    <Modal title="Crop" open={true} onClose={() => null}>
      <Typography className="interRegular14">Image 001</Typography>
      <Box
        mt="10px"
        position={'relative'}
        height={'50dvh'}
        minHeight={'300px'}
        maxHeight={'600px'}
      >
        <Cropper
          image={
            'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
          }
          //\ aspect={CROP_AREA_ASPECT}
          aspect={1}
          crop={crop}
          zoom={zoom}
          rotation={rotation}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          showGrid={false}
          onCropAreaChange={(croppedArea, croppedAreaPixels) => {
            setCroppedArea(croppedArea);
            setCroppedAreaPixels(croppedAreaPixels);
          }}
        />
      </Box>
      <Box py={3} display={'flex'} justifyContent={'space-between'}>
        <Slider
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e, zoom) => setZoom(Number(zoom))}
          sx={{ width: '200px', marginLeft: '10px' }}
        />
        <PillButton
          variant="secondary"
          text="Rotate"
          icon={<Rotate />}
          size="small"
          onClick={handleRotation}
        />
      </Box>
      <PillButton
        text="Continue"
        size="large"
        variant="primary"
        sx={{ width: '100%' }}
      />
    </Modal>
  );
};
