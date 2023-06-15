import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';

import truck from '../../../public/image 25.png';
import Image from 'next/image';

export const TruckScreen = () => {
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
          }}>
          <div
            style={{
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
        </Box>
      </Grid>

      <Grid item xs={12} md={12} lg={12}>
        <Box
          sx={{
            bgcolor: 'rgba(17, 28, 67, 1)',
            // height: '10px',
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
