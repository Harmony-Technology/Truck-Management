import { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
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
  const [currentTime, setCurrentTime] = useState('00:00:00');
  const [duration, setDuration] = useState('00:00:00');
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setIsHovered(false);
  };

  const handlePause = () => {
    setIsPlaying(false);
    setIsHovered(true);
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

  const handleProgress = (progress) => {
    setCurrentTime(formatTime(progress.playedSeconds));
    setDuration(formatTime(progress.loadedSeconds));
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  };

  const padZero = (value) => {
    return value.toString().padStart(2, '0');
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
          }}
          ref={videoRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          {isPlaying ? (
            <ReactPlayer
              // WW3SCHOOLS BOB VIDEO
              // url='https://www.youtube.com/watch?v=jfKfPfyJRdk'
              url='https://www.w3schools.com/html/mov_bbb.mp4'
              playing={isPlaying}
              width='100%'
              height='100%'
              style={{ objectFit: 'cover' }}
              onProgress={handleProgress}
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
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'red',
                fontSize: '6rem',
              }}>
              <PlayCircleOutlineIcon sx={{ fontSize: '6rem' }} />
            </IconButton>
          )}
          {isPlaying && isHovered && (
            <IconButton
              aria-label='pause'
              onClick={handlePause}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '6rem',
              }}>
              <PauseCircleOutlineIcon sx={{ fontSize: '6rem' }} />
            </IconButton>
          )}
          <IconButton
            aria-label='fullscreen'
            onClick={handleFullscreen}
            sx={{
              position: 'absolute',
              bottom: '1rem',
              right: '1rem',
              color: 'white',
            }}>
            <FullscreenIcon sx={{ fontSize: '2rem' }} />
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
            Du: {currentTime} {'   '} l {'   '} A: {duration}
          </Typography>
        </Box>
      </Grid>
    </>
  );
};
