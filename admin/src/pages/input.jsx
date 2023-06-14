import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products';
import truck from '../../public/image 25.png';
import screen from '../../public/screen.png';
import Image from 'next/image';

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>In put</title>
    </Head>
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        py: 8,
      }}>
      <Container maxWidth='xl'>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
          container
          spacing={3}>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            backgroundColor='#111C43'
            borderRadius='12px'
            width='291px'>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                width: '100%',
              }}>
              <Image src={truck} alt='' width={423} height={291} />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{ backgroundColor: 'gray', mt: 12 }}
            md={6}
            lg={6}
            borderRadius='12px'>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
              }}>
              <Image src={screen} alt='' />
            </Box>
          </Grid>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              height: '37px',
              width: '424px',
              mt: '14px',
              backgroundColor: 'gray',
            }}>
            <h1>1</h1>
          </Box>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
