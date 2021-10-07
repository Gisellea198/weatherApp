import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FcGoogle, FcLock } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';
import { Colors } from '../assets/styles/style';
import { Link as RouterLink } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  loginFacebook,
  loginGoogle,
  startLoginEmailPassword,
} from "../actions/authActions";

const MyLink = React.forwardRef((props, ref) =>
  <RouterLink innerRef={ref} {...props} />);

const theme = createTheme();




const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remenber: true,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email invalido")
        .required("Email requerido"),
      password: Yup.string()
        .email("Contraseña invalida")
        .required("Escribe tu contraseña."),
    }),
    onSubmit: () => {
      dispatch(startLoginEmailPassword(email, password));
    },
  });

  const { email, password } = formik.values;
  const handleGoogleLogin = () => {
    dispatch(loginGoogle());
  };
  const handleFacebookLogin = () => {
    dispatch(loginFacebook());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ border: 1, borderColor: 'grey.500', borderRadius: 1, mb: 1 }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Avatar sx={{ m: 1 }} style={{ background: Colors.textPrimaryColor }}>
            <FcLock style={{ height: "40px", width: "40px" }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inciar Sesión
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar
            </Button>
            <Typography sx={{ textAlign: "center", fontSize: 20 }}>
              o
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="text"
              sx={{ mb: 2 }}
              style={{ background: Colors.primaryTextColor }}
              onClick={handleGoogleLogin}
            >
              <FcGoogle style={{ height: "30px", width: "30px", marginRight: "30px" }} />
              <Typography sx={{ color: 'text.primary' }}>
                Iniciar Sesión con Google
              </Typography>

            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ bgcolor: 'info.main' }}
              onClick={handleFacebookLogin}
            >
              <FaFacebookSquare style={{ height: "30px", width: "30px", marginRight: "30px" }} />
              Iniciar Sesión con Facebook
            </Button>
            <Grid container justifyContent="center" sx={{ mt: 3, mb: 3 }}>
              <Grid item >
                <Link component={MyLink} to="/signup" variant="body2" >
                  {"No tengo una cuenta"}
                </Link>
              </Grid>

            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;