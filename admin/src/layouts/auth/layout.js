import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// import { Logo } from 'src/components/logo';
import Image from 'next/image';

export const Layout = (props) => {
  const { children } = props;

  return (
    <Box
      component='main'
      sx={{
        display: 'flex',
        flex: '1 1 auto',
      }}>
      <Grid container sx={{ flex: '1 1 auto' }}>
        <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: 'background: rgba(255, 255, 255, 0.56)',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}>
          <Box
            component='header'
            sx={{
              left: 0,
              p: 3,
              position: 'fixed',
              top: 0,
              width: '100%',
            }}>
            <Box component={NextLink} href='/'>
              <Image
                src='/assets/logos/logo-harmony.svg'
                alt='logo'
                className='absolute bottom-2 left-3 first-letter:object-contain w-28 opacity-80 z-[2]'
                width={97}
                height={97}
              />
              {/* <Logo /> */}
            </Box>
          </Box>
          {children}
        </Grid>
        <Grid
          container
          xs={12}
          lg={6}
          sx={{
            '@media (max-width: 600px)': {
              display: 'none',
            },
            'width': '100%',
            'alignItems': 'center',
            'background':
              'linear-gradient(89.55deg, rgba(255, 242, 206, 0) 0.44%, rgba(249, 181, 49, 0.59) 99.68%), url(.jpg), radial-gradient(51.86% 35.94% at 50% 50%, #FFFAEC 0%, #FFAF36 100%)',
            'color': 'white',
            'display': 'flex',
            'justifyContent': 'flex-start',
            '& img': {
              // maxWidth: '20%',
              position: 'relative',
              right: 110,
            },
            '@media (max-width: 1200px)': {
              display: 'none',
              // 'justifyContent': 'center',
              // '& img': {
              //   maxWidth: '50%',
              //   right: 0,
              // },
            },
          }}>
          <Box sx={{ p: 3 }}>
            <img
              alt=''
              src='/assets/truck001.png'
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

Layout.prototypes = {
  children: PropTypes.node,
};
