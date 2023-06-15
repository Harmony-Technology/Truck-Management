import { useState, useRef } from 'react';
import {
  Box,
  Typography,
  Unstable_Grid2 as Grid,
  IconButton,
} from '@mui/material';
import truck from '../../../public/image 25.png';
import Image from 'next/image';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

export const TruckScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleFullscreen = () => {
    const videoElement = videoRef.current;

    if (videoElement) {
      if (!isFullscreen) {
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) {
          videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen) {
          videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) {
          videoElement.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }

      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <>
      <Grid item xs={12} md={12} lg={12}>
        <Box
          sx={{
            border: '0.7rem solid rgba(17, 28, 67, 1)',
            width: '100%',
            height: '47vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}>
          {isPlaying ? (
            <video
              ref={videoRef}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              src='https://www.w3schools.com/html/mov_bbb.mp4'
              autoPlay
            />
          ) : (
            <div
              style={{
                bgcolor: 'green',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
              }}>
              <Image
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                src={truck}
                alt=''
              />
            </div>
          )}
          {!isPlaying && (
            <IconButton
              aria-label='play'
              onClick={handlePlay}
              style={{
                position: 'absolute',
                bottom: '10%',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'red',
              }}>
              <PlayCircleOutlineIcon sx={{ fontSize: '6rem' }} />
            </IconButton>
          )}
          {isPlaying && (
            <IconButton
              aria-label='pause'
              onClick={handlePause}
              style={{
                position: 'absolute',
                bottom: '10%',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'white',
              }}>
              <PauseCircleOutlineIcon sx={{ fontSize: '6rem' }} />
            </IconButton>
          )}
          <IconButton
            aria-label='fullscreen'
            onClick={handleFullscreen}
            style={{
              position: 'absolute',
              bottom: '1rem',
              right: '1rem',
              color: 'red',
            }}>
            <FullscreenIcon />
          </IconButton>
        </Box>
      </Grid>

      <Grid item xs={12} md={12} lg={12}>
        <Box
          sx={{
            bgcolor: 'rgba(17, 28, 67, 1)',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Typography variant='body1' sx={{ color: 'white', py: 2 }}>
            Du : 12:04:23 {'          '} l {'          '} A : 03:21:38
          </Typography>
        </Box>
      </Grid>
    </>
  );
};
