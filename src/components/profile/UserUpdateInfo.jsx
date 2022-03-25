import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  MenuItem,
  Container,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import { active, gender, purposes } from "../../../data/updateProfile";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../redux/ducks/profile";
import { setSnackbar } from "../../../redux/ducks/snackbar";

const validationSchema = yup.object({
  userName: yup.string("Enter your name").required("Name is required"),
  userAge: yup
    .number()
    .required("Age is required")
    .min(15, "You must be at least 15 years old")
    .max(65, "You must be at most 65 years old"),
  userWeight: yup
    .number()
    .required("Weight is required")
    .min(15, "You must be at least 15 kgs")
    .max(400, "You must be at most 400 kgs"),
  userHeight: yup
    .number()
    .required("Height is required")
    .min(1.6, "You must be at least 1.5m tall")
    .max(2, "You must be at most 2m tall"),
  userGender: yup.string().required("Gender is required"),
  userPurpose: yup.string().required("Please specify your purpose"),
  userActivity: yup
    .string()
    .required("Please specify your daily activity levels"),
});
const UserUpdateInfo = (props) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const { setPopup } = props;

  const useStyles = makeStyles({
    card: {
      //   display: 'flex',
      backgroundColor: "#201A30",
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
    avatar: {
      height: 170,
      width: 170,
    },
    submit: {
      // margin: theme.spacing(3, 0, 2),
      backgroundColor: "#25c666",
      color: "#201A30",
      borderRadius: 5,
      // width: 200
    },
  });
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      userName: profile.userName,
      userAge: profile.userAge,
      userHeight: profile.userHeight,
      userWeight: profile.userWeight,
      userGender: profile.userGender,
      userActivity: profile.userActivity,
      userPurpose: profile.userPurpose,
      userEmail: profile.userEmail,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(updateProfile(values));
      setPopup(false);
    },
  });

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="userName"
            name="userName"
            label="Name"
            autoComplete="off"
            value={formik.values.userName}
            onChange={formik.handleChange}
            error={formik.touched.userName && formik.errors.userName}
            helperText={formik.touched.userName && formik.errors.userName}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="userHeight"
            name="userHeight"
            label="Height(in m)"
            autoComplete="off"
            value={formik.values.userHeight}
            onChange={formik.handleChange}
            error={formik.touched.userHeight && formik.errors.userHeight}
            helperText={formik.touched.userHeight && formik.errors.userHeight}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="userWeight"
            name="userWeight"
            label="Weight(in kg)"
            autoComplete="off"
            value={formik.values.userWeight}
            onChange={formik.handleChange}
            error={formik.touched.userWeight && formik.errors.userWeight}
            helperText={formik.touched.userWeight && formik.errors.userWeight}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="userAge"
            name="userAge"
            label="Age"
            autoComplete="off"
            value={formik.values.userAge}
            onChange={formik.handleChange}
            error={formik.touched.userAge && formik.errors.userAge}
            helperText={formik.touched.userAge && formik.errors.userAge}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="userGender"
            name="userGender"
            label="Gender"
            select
            value={formik.values.userGender}
            onChange={formik.handleChange}
            error={formik.touched.userGender && formik.errors.userGender}
            helperText={formik.touched.userGender && formik.errors.userGender}
          >
            {gender.map((gen) => (
              <MenuItem value={gen.option}>{gen.option}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="userActivity"
            name="userActivity"
            label="Activity levels"
            select
            value={formik.values.userActivity}
            onChange={formik.handleChange}
            error={formik.touched.userActivity && formik.errors.userActivity}
            helperText={
              formik.touched.userActivity && formik.errors.userActivity
            }
          >
            {active.map((activities) => (
              <MenuItem value={activities.title}>{activities.title}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="userPurpose"
            name="userPurpose"
            label="Purpose"
            select
            value={formik.values.userPurpose}
            onChange={formik.handleChange}
            error={formik.touched.userPurpose && formik.errors.userPurpose}
            helperText={formik.touched.userPurpose && formik.errors.userPurpose}
          >
            {purposes.map((purpose) => (
              <MenuItem key={purpose.option} value={purpose.option}>
                {purpose.option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item md={6} xs={12}></Grid>
      </Grid>

      {/* <Divider /> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button
          className={classes.submit}
          color="primary"
          variant="contained"
          type="submit"
        >
          Save details
        </Button>
      </Box>
    </form>
  );
};
export default UserUpdateInfo;
