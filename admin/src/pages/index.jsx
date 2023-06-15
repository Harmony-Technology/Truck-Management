import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewBudget } from "src/sections/overview/overview-budget";
import { OverviewLatestOrders } from "src/sections/overview/overview-latest-orders";

const Page = () => (
  <>
    <Head>
      <title>Dashboard</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
        bgcolor: "#D9D9D9",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 5,
              borderRadius: "12px",
              height: "100%",
            }}
          >
            <Grid xs={12} sm={6} lg={6}>
              <OverviewBudget
                difference={12}
                positive
                sx={{ height: "100%" }}
                value="$24k"
              />
            </Grid>
            <Grid xs={12} sm={6} lg={6}>
              <OverviewBudget
                difference={12}
                positive
                sx={{ height: "100%" }}
                value="$24k"
              />
            </Grid>
            <Grid xs={12} sm={6} lg={6}>
              <OverviewBudget
                difference={12}
                positive
                sx={{ height: "100%" }}
                value="$24k"
              />
            </Grid>
            <Grid xs={12} sm={6} lg={6}>
              <OverviewBudget
                difference={12}
                positive
                sx={{ height: "100%" }}
                value="$24k"
              />
            </Grid>
          </Container>
          <Grid xs={12} md={12} lg={12}>
            <OverviewLatestOrders
              orders={[
                {
                  id: "#232458",
                  plate_number: "QY980945",
                  intime: "12/04/2023",
                  status: "Active",
                  tag: "80982938",
                  hour: "04:45:32",
                  image: "/../public/Truck.jpg",
                  image1: "/../public/Id.jpg",
                },
                {
                  id: "#232458",
                  plate_number: "QY980945",
                  intime: "12/04/2023",
                  status: "Inactive",
                  tag: "80982938",
                  hour: "04:45:32",
                  image: "/../public/Truck.jpg",
                  image1: "/../public/Id.jpg",
                },
                {
                  id: "#232458",
                  plate_number: "QY980945",
                  intime: "12/04/2023",
                  status: "Inactive",
                  tag: "80982938",
                  hour: "04:45:32",
                  image: "/../public/Truck.jpg",
                  image1: "/../public/Id.jpg",
                },
                {
                  id: "#232458",
                  plate_number: "QY980945",
                  intime: "12/04/2023",
                  status: "Active",
                  tag: "80982938",
                  hour: "04:45:32",
                  image: "/../public/Truck.jpg",
                  image1: "/../public/Id.jpg",
                },
                {
                  id: "#232458",
                  plate_number: "QY980945",
                  intime: "12/04/2023",
                  hour: "04:45:32",
                  tag: "80982938",
                  status: "Active",
                  image: "/../public/Truck.jpg",
                  image1: "/../public/Id.jpg",
                },
                {
                  id: "#232458",
                  plate_number: "QY980945",
                  intime: "12/04/2023",
                  status: "Inactive",
                  tag: "80982938",
                  hour: "04:45:32",
                  image: "/../public/Truck.jpg",
                  image1: "/../public/Id.jpg",
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
