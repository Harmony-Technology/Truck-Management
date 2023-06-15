import Head from "next/head";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import Image from "next/image";
import screen from "../../public/Screen.png";
import id from "../../public/id.png";

const Page = () => (
  <>
    <Head>
      <title>Out put</title>
    </Head>
    <Box
      sx={{
        flexGrow: 1,
        py: 8,
        justifyContent: "center",
        bgcolor: "#D9D9D9",
        height: "100%",
        width: "100%",
      }}
    >
      <Container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          mb: 5,
          display: "grid",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            border: 0.7 + "rem solid",
            borderColor: "rgba(17, 28, 67, 1)",
          }}
        >
          <Image
            src={screen}
            alt="Picture of the author"
            width={800}
            height={500}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          <Image
            src={id}
            alt="Picture of the author"
            width={230}
            height={70}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </Box>
        <Grid item xs={12} md={12} lg={12}>
          <Stack
            direction="row"
            sx={{ height: "12vh" }}
            spacing={2}
            justifyContent="space-between"
            marginTop={1}
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
              <Typography
                variant="body"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#464E5F",
                }}
              >
                {" "}
                ID
              </Typography>
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
              <Typography
                variant="body"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#464E5F",
                }}
              >
                {" "}
                ID
              </Typography>
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
              <Typography
                variant="body2"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#464E5F",
                }}
              >
                {" "}
                Date
              </Typography>
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
              <Typography
                variant="body2"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#464E5F",
                }}
              >
                {" "}
                Time
              </Typography>
              <Typography variant="h6"> 12:04:23</Typography>
            </Box>
          </Stack>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button
            variant="contained"
            style={{
              backgroundColor: "#12A727",
              color: "white",
              width: "200px",
              height: "50px",
              fontSize: "20px",
            }}
          >
            Checked
          </Button>
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
