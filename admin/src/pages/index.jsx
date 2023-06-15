import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { useTrucks } from '@/hooks/query-hooks/useTrucks';
import moment from 'moment';

const Page = () => {
  // const { data, refetch } = useTrucks();
  // console.log(data);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          py: 8,
          bgcolor: '#D9D9D9',
        }}>
        <Container maxWidth='xl'>
          <Grid container spacing={0}>
            <Container
              maxWidth='xl'
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 5,
                borderRadius: '12px',
                height: '100%',
              }}>
              <Grid xs={12} sm={6} lg={6}>
                <OverviewBudget
                  difference={12}
                  positive
                  sx={{ height: '100%' }}
                  value='$24k'
                />
              </Grid>
              <Grid xs={12} sm={6} lg={6}>
                <OverviewBudget
                  difference={12}
                  positive
                  sx={{ height: '100%' }}
                  value='$24k'
                />
              </Grid>
              <Grid xs={12} sm={6} lg={6}>
                <OverviewBudget
                  difference={12}
                  positive
                  sx={{ height: '100%' }}
                  value='$24k'
                />
              </Grid>
              <Grid xs={12} sm={6} lg={6}>
                <OverviewBudget
                  difference={12}
                  positive
                  sx={{ height: '100%' }}
                  value='$24k'
                />
              </Grid>
            </Container>
            <Grid xs={12} md={12} lg={12}>
              <OverviewLatestOrders
                // map data from api here
                // orders={(data?.data || []).map((item) => ({
                //   id: item.id,
                //   plate_number: item.plate_number,
                //   intime: moment(item.date).format('DD/MM/YYYY'),
                //   hour: moment(item.date).format('HH:mm:ss'),
                //   outtime: '',
                //   tag: '',
                //   status: '',
                //   image: item.url_truck,
                //   image1: item.url_plate,
                // }))}
                orders={[
                  {
                    id: '#232458',
                    plate_number: 'QY980945',
                    intime: '12/04/2023',
                    status: 'Inactive',
                    tag: '80982938',
                    hour: '04:45:32',
                    image: '/../public/Truck.jpg',
                    image1: '/../public/Id.jpg',
                  },
                ]}
                sx={{ height: '100%' }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
