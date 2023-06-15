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
import { React } from 'react';
import { PlayCircleIcon } from '@heroicons/react/24/outline';

export const TruckTableOutput = () => {
  const rows = [
    createData('#50498', 'QY980945', '12/07/2023'),
    createData('#107458', 'J8580945', 'Z695945', '04/07/2023'),
    createData('#20658', 'Z695945', 'Z695945', '31/08/2023'),
    createData('#23849', 'L87065', 'Z695945', '27/09/2023'),
  ];

  function createData(ID, Plate_N, date) {
    return { ID, Plate_N, date };
  }

  return (
    <>
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
                <InputLabel id='demo-simple-select-label'>Ce Mois</InputLabel>
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
                        <Button>
                          <PlayCircleIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      </Grid>
    </>
  );
};
