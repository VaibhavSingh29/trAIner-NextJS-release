import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {authenticateLogin} from '../../../redux/ducks/auth';
import {useDispatch } from 'react-redux';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#0CF4E2',
    color: '#201A30',
    borderRadius: 20,
  },
  link: {
    color: '#0cf4e2',
  }
}));

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const LoginContainer = () => {

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));//post req
      dispatch(authenticateLogin({...values}))
    },
  });

  const classes = useStyles();
  return (
    <Container component='main' maxWidth='xs' >
      <CssBaseline/>
    <div className = {classes.paper}>
    <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <TextField
          variant='outlined'
          margin='normal'
          fullWidth
          id="email"
          name="email"
          label="Email Address"
          autoComplete="off"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
        variant='outlined'
        margin='normal'
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit" className={classes.submit}>
          Login
        </Button>
        <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" className={classes.link}>
              <a style={{textDecoration: 'none', color: '#0cf4e2'}}>{'Forgot password?'}</a>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2" className={classes.link}>
              <a style={{textDecoration: 'none', color: '#0cf4e2'}}>{"Don't have an account? Sign Up"}</a>
              </Link>
            </Grid>
          </Grid>
      </form>
    </div>
    </Container>

  );
};

export default LoginContainer;


// will have to connect this component to the redux store...how? SOLUTION: USESELECTOR

