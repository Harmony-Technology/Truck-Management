import Head from "next/head";
import {
  Box,
  Typography,
  Stack,
  Button,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
// import truck from '../../public/image 25.png';
import screen from "../../public/screen.png";
import plate from "../../public/plate.png";
import Image from "next/image";
import { React, useState } from "react";
import { TruckScreen } from "@/sections/input/truck-screen";
import { TruckTableInput } from "@/sections/input/truck-table-input";
import { TruckTableOutput } from "@/sections/input/truck-table-output";

const Page = () => (
  // const [age, setAge] = useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  <>
    <Head>
      <title>In put</title>
    </Head>
    <Box
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "space-around",
        bgcolor: "#D9D9D9",
        height: "100%",
        width: "100%",
        overflowY: "hidden",
      }}
    >
      <Grid container spacing={3} sx={{ width: "100%" }}>
        <Grid container item xs={12} md={12} lg={6}>
          <TruckScreen />
          <TruckTableInput />
        </Grid>

        <Grid spacing={2} container item xs={12} md={12} lg={6}>
          <Grid item xs={12} md={12} lg={12}>
            <Stack
              direction="row"
              sx={{ height: "12vh" }}
              spacing={2}
              justifyContent="space-between"
            >
              <Box
                sx={{
                  height: "100%",
                  bgcolor: "white",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  borderRadius: "10px",
                }}
              >
                <Typography variant="body"> ID</Typography>
                <Typography variant="h6"> #50498</Typography>
              </Box>
              <Box
                sx={{
                  height: "100%",
                  bgcolor: "white",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  borderRadius: "10px",
                }}
              >
                <Typography variant="body"> ID</Typography>
                <Typography variant="h6"> 5108-02</Typography>
              </Box>
              <Box
                sx={{
                  height: "100%",
                  bgcolor: "white",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  borderRadius: "10px",
                }}
              >
                <Typography variant="body2"> Date</Typography>
                <Typography variant="h6"> 12/07/2023</Typography>
              </Box>{" "}
              <Box
                sx={{
                  height: "100%",
                  bgcolor: "white",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  borderRadius: "10px",
                }}
              >
                <Typography variant="body2"> Time</Typography>
                <Typography variant="h6"> 12:04:23</Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Box>
              <Image
                style={{
                  // objectFit: "contain",
                  overflowY: "hidden",
                  justifyItems: "center",
                  justifyContent: "center",
                  // display: "grid",
                  width: "100%" /* or 100% */,
                }}
                src={screen}
                alt=""
                width={800}
                height={300}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Stack
              sx={{ width: "100%", mb: 5 }}
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Image
                style={{ objectFit: "contain" }}
                src={plate}
                alt=""
                // width='100%'
                // height={300}
                height="100%"
              />
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "rgba(18, 167, 39, 1)",
                  color: "white",
                  width: "168px",
                  height: "39px",
                  "&:hover": {
                    backgroundColor: "rgba(18, 167, 39, 1)",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                <Typography variant="body1"> Check</Typography>
              </Button>
            </Stack>
          </Grid>
          <TruckTableOutput />
        </Grid>
      </Grid>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
