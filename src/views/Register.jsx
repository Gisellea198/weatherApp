import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FcLock } from 'react-icons/fc';
import { Colors } from '../assets/styles/style';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { startRegisterWithEmailPasswordNameLastName } from "../actions/authActions.js";
import { buildUserDto } from "../db/userDto";


const prop = {
    error: {
        margin: "0 auto 1rem auto",
        color: "#f60000",
    },
}

const MyLink = React.forwardRef((props, ref) =>
    <RouterLink innerRef={ref} {...props} />);

const SignUp = (props) => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            name: "",
            lastname: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Escribe tu nombre"),
            lastName: Yup.string()
                .required("Escribe tus apellidos"),
            email: Yup.string()
                .email("Email invalido")
                .required("Email requerido"),
            password: Yup.string()
                .min(8, "La contraseña es muy corta - debe tener minimo 8 caracteres.")
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w*\W*]/,
                    "La contraseña debe tener minimo un numero, una mayuscula y un minuscula."
                )
                .required("Escribe tu contraseña."),

        }),

        onSubmit: () => {
            const formValues = buildUserDto(formik.values);
            dispatch(startRegisterWithEmailPasswordNameLastName(formValues));
        },
    });

    const {
        name,
        lastName,
        email,
        password,

    } = formik.values;

    return (
        <Container component="main" maxWidth="xs" sx={{ border: 1, borderColor: 'grey.500', borderRadius: 1, mb: 1 }}>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}
            >
                <Avatar sx={{ m: 1 }} style={{ background: Colors.textPrimaryColor }}>
                    <FcLock style={{ height: "40px", width: "40px" }} />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Registro
                </Typography>
                <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="name"
                                required
                                fullWidth
                                id="name"
                                label="Nombre"
                                autoFocus
                                value={name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Grid>
                        {formik.touched.name && formik.errors.name ? (
                            <Grid margin={prop.error.margin} color={prop.error.color}>
                                {formik.errors.name}
                            </Grid>
                        ) : null}

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Apellido"
                                name="lastName"
                                autoComplete="lname"
                                value={lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Grid>
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <Grid margin={prop.error.margin} color={prop.error.color}>
                                {formik.errors.lastName}
                            </Grid>
                        ) : null}
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Correo"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Grid>
                        {formik.touched.email && formik.errors.email ? (
                            <Grid margin={prop.error.margin} color={prop.error.color}>
                                {formik.errors.email}
                            </Grid>
                        ) : null}
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                value={password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Grid>
                        {formik.touched.password && formik.errors.password ? (
                            <Grid margin={prop.error.margin} color={prop.error.color}>
                                {formik.errors.email}
                            </Grid>
                        ) : null}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Registrarse
                    </Button>
                    <Grid container justifyContent="center" sx={{ mt: 2, mb: 3 }}>
                        <Grid item>
                            <Link component={MyLink} to="/login" variant="body2" >
                                {"¿Ya tienes una cuenta? Ingresa"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default SignUp;