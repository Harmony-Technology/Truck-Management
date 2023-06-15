import Head from 'next/head';
import {
  Box,
  Typography,
  Paper,
  Stack,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Button,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import truck from '../../public/image 25.png';
import screen from '../../public/screen.png';
import Image from 'next/image';
import { React, useState } from 'react';

const rows = [
  createData('#50498', 'QY980945', '12/07/2023'),
  createData('#107458', 'J8580945', 'Z695945', '04/07/2023'),
  createData('#20658', 'Z695945', 'Z695945', '31/08/2023'),
  createData('#23849', 'L87065', 'Z695945', '27/09/2023'),
];

function createData(ID, Plate_N, date) {
  return { ID, Plate_N, date };
}

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
        display: 'flex',
        justifyContent: 'space-around',
        bgcolor: '#D9D9D9',
        height: '100%',
        width: '100%',
      }}>
      <Grid container spacing={3} sx={{ width: '100%' }}>
        <Grid container item xs={12} md={6} lg={6}>
          <Grid item xs={12} md={12} lg={12}>
            <Box
              sx={{
                border: 0.7 + 'rem solid',
                borderColor: 'rgba(17, 28, 67, 1)',
                width: '100%',
                height: '47vh',
              }}>
              <Image
                style={{ objectFit: 'contain' }}
                src={truck}
                alt=''
                width='100%'
              />
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
          <Grid item xs={12} md={12} lg={12}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}>
              <Paper elevation={1} sx={{ width: '100%', p: '20px' }}>
                <Stack
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'>
                  <Typography variant='h6'> Input</Typography>
                  <FormControl sx={{ width: '100px' }}>
                    <InputLabel id='demo-simple-select-label'>
                      Ce Mois
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      // value={age}
                      label='Age'
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>Janvier</MenuItem>
                      <MenuItem value={20}>Fevrier</MenuItem>
                      <MenuItem value={30}>Mars</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
                <TableContainer sx={{ pt: '20px' }} component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <Typography variant='body1' fontWeight='bold'>
                            ID
                          </Typography>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography variant='body1' fontWeight='bold'>
                            Plate N
                          </Typography>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography variant='body1' fontWeight='bold'>
                            Date
                          </Typography>
                        </TableCell>
                        <TableCell align='right'></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.ID}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}>
                          <TableCell component='th' scope='row'>
                            {row.ID}
                          </TableCell>
                          <TableCell align='right'>{row.Plate_N}</TableCell>
                          <TableCell align='right'>{row.date}</TableCell>
                          <TableCell align='right'>
                            <Button
                              variant='contained'
                              sx={{
                                bgcolor: 'rgba(17, 28, 67, 1)',
                                color: 'white',
                              }}></Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Box>
          </Grid>
        </Grid>

        <Grid spacing={2} container item xs={12} md={6} lg={6}>
          <Grid item xs={12} md={12} lg={12}>
            <Stack
              direction='row'
              sx={{ height: '12vh' }}
              spacing={2}
              justifyContent='space-between'>
              <Box
                sx={{
                  height: '100%',
                  bgcolor: 'white',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  borderRadius: '10px',
                }}>
                <Typography variant='body'> ID</Typography>
                <Typography variant='h6'> #50498</Typography>
              </Box>
              <Box
                sx={{
                  height: '100%',
                  bgcolor: 'white',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  borderRadius: '10px',
                }}>
                <Typography variant='body'> ID</Typography>
                <Typography variant='h6'> 5108-02</Typography>
              </Box>
              <Box
                sx={{
                  height: '100%',
                  bgcolor: 'white',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  borderRadius: '10px',
                }}>
                <Typography variant='body2'> Date</Typography>
                <Typography variant='h6'> 12/07/2023</Typography>
              </Box>{' '}
              <Box
                sx={{
                  height: '100%',
                  bgcolor: 'white',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  borderRadius: '10px',
                }}>
                <Typography variant='body2'> Time</Typography>
                <Typography variant='h6'> 12:04:23</Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Box sx={{ bgcolor: 'red' }}>
              <Image
                style={{ objectFit: 'contain' }}
                src={screen}
                alt=''
                // width='100%'
                height={300}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Stack
              sx={{ width: '100%', bgcolor: 'red', py: 2 }}
              direction='row'
              justifyContent='space-evenly'
              alignItems='center'>
              <Button
                variant='contained'
                sx={{
                  bgcolor: 'rgba(17, 28, 67, 1)',
                  color: 'white',
                  width: '100px',
                  height: '39px',
                }}>
                <Typography variant='body1'> Check</Typography>
              </Button>

              <Button
                variant='contained'
                sx={{
                  bgcolor: 'rgba(17, 28, 67, 1)',
                  width: '100px',
                  height: '39px',
                  color: 'white',
                }}>
                <Typography variant='body1'> Check</Typography>
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}>
              <Paper elevation={1} sx={{ width: '100%', p: '20px' }}>
                <Stack
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'>
                  <Typography variant='h6'> Output</Typography>
                  <FormControl sx={{ width: '100px' }}>
                    <InputLabel id='demo-simple-select-label'>
                      Ce Mois
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      // value={age}
                      label='Age'
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>Janvier</MenuItem>
                      <MenuItem value={20}>Fevrier</MenuItem>
                      <MenuItem value={30}>Mars</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
                <TableContainer sx={{ pt: '20px' }} component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <Typography variant='body1' fontWeight='bold'>
                            ID
                          </Typography>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography variant='body1' fontWeight='bold'>
                            Plate N
                          </Typography>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography variant='body1' fontWeight='bold'>
                            Date
                          </Typography>
                        </TableCell>
                        <TableCell align='right'></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.ID}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}>
                          <TableCell component='th' scope='row'>
                            {row.ID}
                          </TableCell>
                          <TableCell align='right'>{row.Plate_N}</TableCell>
                          <TableCell align='right'>{row.date}</TableCell>
                          <TableCell align='right'>
                            <Button
                              variant='contained'
                              sx={{
                                bgcolor: 'rgba(17, 28, 67, 1)',
                                color: 'white',
                              }}></Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
