import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { useTrucks } from '@/hooks/query-hooks/useTrucks';
const Page = () => {
  const { data, refetch } = useTrucks();
  console.log(data);

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
              <Grid
                container
                spacing={2}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  borderRadius: '12px',
                  height: '100%',
                  width: '100%',
                }}>
                <Grid
                  xs={12}
                  sm={6}
                  lg={3}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    borderRadius: '12px',
                    height: '100%',
                    width: '100%',
                  }}>
                  <OverviewBudget
                    difference={12}
                    positive
                    sx={{ height: '100%' }}
                    value='$24k'
                  />
                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  lg={3}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    borderRadius: '12px',
                    height: '100%',
                    width: '100%',
                  }}>
                  <OverviewBudget
                    difference={12}
                    positive
                    sx={{ height: '100%' }}
                    value='$24k'
                  />
                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  lg={3}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    borderRadius: '12px',
                    height: '100%',
                    width: '100%',
                  }}>
                  <OverviewBudget
                    difference={12}
                    positive
                    sx={{ height: '100%' }}
                    value='$24k'
                  />
                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  lg={3}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    borderRadius: '12px',
                    height: '100%',
                    width: '100%',
                  }}>
                  <OverviewBudget
                    difference={12}
                    positive
                    sx={{ height: '100%' }}
                    value='$24k'
                  />
                </Grid>
              </Grid>
            </Container>
            <Grid item xs={12} md={12} lg={12}>
              <OverviewLatestOrders
                orders={[
                  {
                    id: data?.id,
                    plate_number: data?.platenumber,
                    // filter the date and time  from the database
                    
                  
                    // outtime: '',
                    // tag: '',
                    // status: '',
                    // image: data?.image,
                    // image1: '',
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
