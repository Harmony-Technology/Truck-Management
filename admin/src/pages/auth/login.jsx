import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Container,
  InputLabel,
} from '@mui/material';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';

const Page = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: 'demo@devias.io',
      password: 'Password123!',
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup.string().max(255).required('Password is required'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        // await auth.signIn(values.email, values.password);
        router.push('/');
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Box
        sx={{
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%',
          }}>
          <div>
            <Container
              sx={{
                p: 3,

                backgroundColor: 'white',
                // backgroundColor: 'background: rgba(255, 255, 255, 0.56)',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                // shadow
                boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.06)',
                height: '700px',
                width: '578px',
              }}>
              <Stack spacing={2} sx={{ mb: 12, width: '350px' }}>
                <Typography color='##484444' fontWeight={700} fontSize={40}>
                  Welcome Back
                </Typography>
                <Typography color='#464E5F' fontSize={29}>
                  Truck Management Web Application
                </Typography>
              </Stack>

              <form noValidate onSubmit={formik.handleSubmit}>
                <Stack spacing={1}>
                  <InputLabel sx={{ color: '#000000' }} htmlFor='email'>
                    Email
                  </InputLabel>

                  <TextField
                    InputProps={{
                      'sx': {
                        '& input': {
                          display: 'flex',
                          alignItems: 'center',
                          paddingTop: '12px',
                        },
                        'height': '56px',
                        'width': '410px',
                      },
                      // change color of border on click
                      '&:focus': {
                        borderColor: 'black',
                      },
                    }}
                    className='rounded-lg'
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    name='email'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type='email'
                    value={formik.values.email}
                  />
                </Stack>

                <Stack spacing={1} sx={{ mt: 3 }}>
                  <InputLabel sx={{ color: '#000000' }} htmlFor='password'>
                    Mot de passe
                  </InputLabel>

                  <TextField
                    className='rounded-lg '
                    InputProps={{
                      sx: {
                        '& input': {
                          display: 'flex',
                          alignItems: 'center',
                          paddingTop: '12px',
                        },
                        'height': '56px',
                        'width': '410px',
                      },
                    }}
                    error={
                      !!(formik.touched.password && formik.errors.password)
                    }
                    fullWidth
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    name='password'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type='password'
                    value={formik.values.password}
                  />
                </Stack>

                {formik.errors.submit && (
                  <Typography color='error' sx={{ mt: 3 }} variant='body2'>
                    {formik.errors.submit}
                  </Typography>
                )}
                <Button
                  fullWidth
                  size='large'
                  sx={{
                    'mt': 3,
                    'height': '61px',
                    'width': '410px',
                    'backgroundColor': '#F9B531',
                    '&:hover': {
                      backgroundColor: '#F9B531',
                      opacity: 0.8,
                    },
                  }}
                  type='submit'
                  variant='contained'>
                  Connexion
                </Button>
              </form>
            </Container>
          </div>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Page;
